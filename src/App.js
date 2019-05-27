import React, {Component} from 'react';
import './App.css';
import uuid from 'uuid';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

class App extends Component  {
  state = {
    todos: [],
    id: uuid(),
    todo: '',
    editItem: false
  };

  handleChange = (e) => {
    this.setState({
      todo: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const newTodo = {id: this.state.id, title: this.state.todo}
    const updatedTodo = [...this.state.todos, newTodo];
    this.setState({
      todos: updatedTodo,
      todo: '',
      id: uuid(),
      editItem: false
    }, () => console.log(this.state))   
  }

  handleDelete = (id) => {
    const filteredTodos = this.state.todos.filter(todo => todo.id !== id);
    this.setState({
      todos: filteredTodos
    })
  }

  handleEdit = (id) => {
    const filteredTodos = this.state.todos.filter(todo => todo.id !== id);
    const selectedTodo = this.state.todos.find(todo => todo.id === id);
    this.setState({
      todos: filteredTodos,
      todo: selectedTodo.title,
      id: id,
      editItem: true
    })
  }

  clearList = () => {
    this.setState({
      todos: []
    })
  }
  

  render(){
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 col-md-8 mx-auto mt-4">
             <h3 className="text-capitailze text-center">
              Todo App
            </h3>
            <h3>
              <TodoInput 
                todo={this.state.todo} 
                editItem={this.state.editItem}
                handleChange={this.handleChange} 
                handleSubmit={this.handleSubmit}
              />
              <TodoList 
                todos={this.state.todos}
                clearList={this.clearList} 
                handleDelete={this.handleDelete}
                handleEdit={this.handleEdit}
              />
            </h3> 
          </div>
        </div>
      </div>
    );
  }
}

export default App;
