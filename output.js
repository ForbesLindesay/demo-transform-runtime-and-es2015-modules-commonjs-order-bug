'use strict';

import _Object$keys from 'babel-runtime/core-js/object/keys';

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getKeys(obj) {
  return _Object$keys(obj);
}

const assert = require('assert');
const foo = { a: true };

let MyClass = function MyClass() {
  (0, _classCallCheck3.default)(this, MyClass);
};

MyClass.query = _getKeys(foo);

assert.deepEqual(MyClass.query, ['a']);