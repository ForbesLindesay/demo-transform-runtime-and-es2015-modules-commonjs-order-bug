Adding a helper function that implicitly uses a runtime function from within a property of a class causes the module import to be ignored.

To reproduce, run:

```
npm install
node index.js
```


[![Greenkeeper badge](https://badges.greenkeeper.io/ForbesLindesay/demo-transform-runtime-and-es2015-modules-commonjs-order-bug.svg)](https://greenkeeper.io/)