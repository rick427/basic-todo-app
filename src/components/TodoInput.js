import React, { Component } from 'react'

class TodoInput extends Component {
    render() {
        const {todo, handleChange, handleSubmit, editItem} = this.props;
        return (
            <div className="card card-body my-3">
                <form onSubmit={handleSubmit} >
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text bg-primary text-white">
                                <i className="fas fa-book"></i>
                            </div>
                        </div>
                        <input 
                           type="text" 
                           value={todo} 
                           onChange={handleChange}
                           className="form-control text-capitalize" 
                           placeholder="Input your todo"
                        />
                        <button 
                            type="submit" 
                            className="btn btn-outline-success text-uppercase btn-block mt-3"
                        >
                            add todo
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}
export default TodoInput;
