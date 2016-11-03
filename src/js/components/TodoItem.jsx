var React = require('react');

var todoStore = require('../stores/todoStore');

var TodoItem = React.createClass({

    getInitialState: function () {
        return {
            count: 0
        };
    },

    render: function () {
        var completedElement;

        if(this.props.item.completed) {
            completedElement = <s>{this.props.item.text}</s>;
        } else {
            completedElement = <span>{this.props.item.text}</span>;
        }

        return (
            <li onClick={this.handleClick}>
                {completedElement}
                <button onClick={this.handleIncrementClick}>{this.state.count}</button>
            </li>
        );

    },

    handleClick: function () {
        todoStore.complete(this.props.item.id);
    },

    handleIncrementClick: function () {
        this.setState ({
            count: this.state.count + 1
        });
    }

});

module.exports = TodoItem;