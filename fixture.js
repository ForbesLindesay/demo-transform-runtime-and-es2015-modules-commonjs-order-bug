const assert = require('assert');
const foo = {a: true};
class MyClass {
  static query = getKeys(foo);
}
assert.deepEqual(MyClass.query, ['a']);
