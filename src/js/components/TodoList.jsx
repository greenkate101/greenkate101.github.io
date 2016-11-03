var React = require('react');

var TodoItem = require('./TodoItem.jsx');
var todoStore = require('../stores/todoStore');

var TodoList = React.createClass({

    getInitialState: function () {
        return {
            todoItems: todoStore.getItems(),
            newItemText: ''
        };
    },

    // lifecycle hook: executed at some point during the lifetime of
    // a component
    componentWillMount: function () {
        var _this = this;
        todoStore.on('update', function () {
            var updatedItems = todoStore.getItems();
            _this.setState({
                todoItems: updatedItems
            });
        });
    },

    render: function () {
        var todoItems = this.state.todoItems.map(function (item) {
            return <TodoItem item={item} key={item.id} />;
        });
        return (
            <div>
                <ul>{todoItems}</ul>
                <input ref="input" onChange={this.handleChange} type="text" value={this.state.newItemText} />
                <button onClick={this.handleClick}>Add Item</button>
            </div>
        );
    },


    handleClick: function () {
        todoStore.add(this.state.newItemText);
        this.setState({
            newItemText: '',
        });
    },

    handleChange: function () {
        this.setState({
            newItemText: this.refs.input.value
        });
    }

});

module.exports = TodoList;