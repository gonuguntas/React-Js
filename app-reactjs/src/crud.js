import React from 'react';

class Crud extends React.Component {
    
    addTodo(event){
        event.preventDefault();
        console.log(this.refs);
        let fname = this.refs.fname.value;
        let lname = this.refs.lname.value;
        let counter = this.state.counter;

        let toDo = {fname,
             lname,
             counter
            };
           counter+=1;

        let todos = this.state.todos;

        todos.push(toDo);

        this.setState({todos : todos, counter : counter});

        this.refs.todoForm.reset();
    }

    deleteTodo(index){
        let todos = this.state.todos;
        let todo = todos.find(function(todo){
                return todo.counter === index
        });

        todos.splice(todo,1);
        this.setState({
            todos:todos
        });
    }

    edit(index){
        let todos = this.state.todos;
        let todo = todos.find(function(todo){
                return todo.counter === index
        });
        console.log("You clicked on ");
        console.log(todo);
    }
 
    constructor(props) {
      super(props);
		
      this.state = {
         todos:[],
         title: "ReactJs CRUD Operation",
         counter:0
      }

      this.addTodo = this.addTodo.bind(this);
      this.deleteTodo = this.deleteTodo.bind(this);
      this.edit = this.edit.bind(this);


   }

   render() {
    let title = this.state.title;
    let todos = this.state.todos;
      return (
         <div>
             <h2>{title}</h2>
             <form ref="todoForm">
                 <input type="text" ref="fname" />
                 <input type="text" ref="lname" />
                <button onClick = {this.addTodo}> ADD  </button>
             </form>    

             <ul>
                {todos.map((todo) => <li key={todo.counter}>{todo.fname}--{todo.lname}
                    <button onClick = {this.deleteTodo.bind(null, todo.counter)}>Remove</button>
                    <button onClick = {this.edit.bind(null, todo.counter)}>Edit</button>
                </li>)}
            </ul>
            <pre>{JSON.stringify(todos)}
            </pre>
         </div>
      );
   }
}
export default Crud;  