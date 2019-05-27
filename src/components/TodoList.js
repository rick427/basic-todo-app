import React, { Component } from 'react'
import Todoitem from './Todoitem';

class TodoList extends Component {
    render() {
        const {todos, clearList, handleDelete, handleEdit} = this.props;
        return (
            <ul className="list-group my-5">
                <h3 className="text-capitalize text-center">Todo List</h3>
                {todos.map(todo => {
                    return (
                        <Todoitem 
                           key={todo.id} 
                           title={todo.title} 
                           handleDelete={() => handleDelete(todo.id)}
                           handleEdit={() => handleEdit(todo.id)} 
                        />
                    );
                })}
                <button type="button" className="btn btn-danger btn-block text-uppercase mt-5" onClick={clearList}>
                   clear todos
                </button>
            </ul>
        )
    }
}
export default TodoList;