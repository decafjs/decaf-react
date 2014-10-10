// Basic method to render the component on the root
// of the document.body.
var render = function(component){
    return React.renderComponentToString(component);
};

// Basic React js class. This will be like a wrapper for
// the whole application.
var Application = React.createClass({

    // Display name for debug purposes.
    displayName: 'Application',

    // The actual render method of the Application component.
    render: function(){
        // Returns a simple DIV element with a class named
        // 'application' and contents 'Application OK!'.
        return React.DOM.div({className: 'application'}, 'Application OK!');
    }

});

module.exports = {
    render: render,
    Application: Application
};

