import React, {Component} from "react"
import "./App.css"



import Todo from "./components/Todo"
import todosData from "./components/todosData"

class App extends Component {
    constructor() {
        super()
        this.state = {
            todos: todosData
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(id) {
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            })
            return {
                todos: updatedTodos
            }
        })
    }
    
    render() {
        const todoItems = this.state.todos.map(item => <Todo key={item.id} item={item} handleChange={this.handleChange}/>)
        
        return (
            <div className="todo-list">
                {todoItems}
            </div>
        )    
    }
}

export default App






























// import Conditional from "./components/Conditional"

// class App extends Component{
//     constructor(){
//       super()
//       this.state={
//           isLoggedIn: true
//       }
//       this.handleClick=this.handleClick.bind(this)
//     }

//       handleClick(){
//         this.setState(prevState=>{
//           return{
//             isLoggedIn: !prevState.isLoggedIn,
//           }
//         })
//       }

//     render(){
//       let inOutText= this.state.isLoggedIn?<h1>You are logged in</h1>:<h1>You are logged out</h1>;
//       let styling=this.state.isLoggedIn ? 200:100
//       let buttonText = this.state.isLoggedIn ? "Log Out, BiAAATCh": "Log In papichulo"
//       return(
//         <div>
//           <button onClick={this.handleClick}>{buttonText}</button>
//           <h1 style={{fontSize:styling}}>{inOutText}</h1>
//         </div>
//       )
//     }
// }







// class App extends Component{
//   constructor(){
//     super()
//     this.state={
//       count: 0,
//     }
//     this.handleClick = this.handleClick.bind(this)
//   }
//  handleClick(){
//   this.setState(prevState=>{
//     return{
//       count: prevState.count + 1
//     }
//   })
// }
 
//   render(){
//     return(
//       <div>
//         <h1>{this.state.count}</h1>
//         <button onClick={this.handleClick}>Change!</button>
//       </div>
//     )
//   }
// }


// export default App


// class App extends Component{
//  constructor(){
//    super()
//    this.state={
//      count:0,
//    }
//    this.handleClick=this.handleClick.bind(this)
//   }
//   handleClick(){
//     this.setState(prevState=>{
//       return{
//         count: prevState.count + 1,
//       }
//     })
//   }

//  render(){
//    return(
//      <div>
//        <h1>{this.state.count}</h1>
//        <button onClick={this.handleClick}>Touch Me!</button>
//      </div>
//    )
//  }
// }

// export default App