require("decaf-react");

// console.log(require('test.jsx').toString());

debugger
var Application = require('./test').Application,
    render = require('./test').render;

// The initial trigger that will make the Application
// component to actually render on the document's body.
console.dir(render(new Application()));
