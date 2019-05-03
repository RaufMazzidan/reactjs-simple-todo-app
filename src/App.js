import React from 'react'
import TodoItem from './components/TodoItem'
import './App.css';
import todosData from './data/todosData';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      todo : todosData
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id){
    this.setState(prevState => {
        const updatedTodo = prevState.todo.map(data =>{
            if (data.id === id) {
              data.completed = !data.completed
            }
            return data
        })
        return{
          todo : updatedTodo
        }
    })
  }
  
  
  render(){
    const todoComp = this.state.todo.map(data => <TodoItem key={data.id} item={data} handleChange={this.handleChange}/>)
    return (
      
      <div className="todo-list">
      <h2>To Do List</h2>
      {todoComp}
      </div>
    );
  }
  
}

export default App;
