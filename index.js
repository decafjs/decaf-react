global.React = require('react/react');
var JSXTransformer = require('react/JSXTransformer');

include.paths.push('./jsx');
require.paths.push('./jsx');
require.extensions.jsx = include.extensions.jsx = function(source, filename) {
    return JSXTransformer.transform(source).code;
};
