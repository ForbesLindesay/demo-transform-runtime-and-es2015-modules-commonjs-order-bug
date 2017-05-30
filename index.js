const assert = require('assert');
const {readFileSync, writeFileSync} = require('fs');
const {transformFileSync} = require('babel-core');
const template = require('babel-template');

const buildHelper = template(`
  function GET_KEYS(obj) {
    return Object.keys(obj);
  }
`);

writeFileSync(
  __dirname + '/output.js',
  transformFileSync(__dirname + '/fixture.js', {
    babelrc: false,
    plugins: [
      ({types: t}) => {
        return {
          visitor: {
            Identifier(path) {
              if (path.node.name === 'getKeys') {
                const identifier = this.file.scope.generateUidIdentifier('getKeys');
                const helper = buildHelper({
                  GET_KEYS: identifier,
                });
                this.file.path.unshiftContainer("body", helper);
                path.replaceWith(identifier);
              }
            },
          },
        };
      },
      require("babel-plugin-transform-class-properties"),
      require("babel-plugin-transform-es2015-classes"),
      require("babel-plugin-transform-es2015-modules-commonjs"),
      require("babel-plugin-transform-runtime"),
    ],
  }).code
);

assert(
  readFileSync(__dirname + '/output.js', 'utf8').indexOf('import') === -1,
  'The output should not have an import statement because we have used transform-es2015-modules-commonjs',
);
