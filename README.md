Adding a helper function that implicitly uses a runtime function from within a property of a class causes the module import to be ignored.

To reproduce, run:

```
npm install
node index.js
```
