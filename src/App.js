import React, {Component} from 'react';
import './App.css';
import uuid from 'uuid';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

class App extends Component  {
  state = {
    todos: [
      {id: 1, title: "Wake up"},
      {id: 2, title: "Feed the dog"},
      {id: 3, title: "Smack the donkey"},
      {id: 4, title: "Bash some DMC 5"}
    ],
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
    })
  }

  handleDelete = (id) => {
    console.log(`handle delete ${id}`)
  }

  handleEdit = (id) => {
    console.log(`handle edit ${id}`)
  }

  clearList = () => {
    console.log('clear todo')
  }
  

  render(){
    console.log(this.state)
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
