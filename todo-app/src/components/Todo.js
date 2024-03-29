import React from 'react'

function Todo(props){
    const completedStyle = {
        fontStyle:'italic',
        color:"#cdcdcd",
        textDecoration:'line-through'
    }
    return (
        <div  className="todo-item">
            <input 
                type="checkbox" 
                checked={props.item.completed} 
                onChange={()=> props.handleChange(props.item.id)}
            />
            <h3 style={props.item.completed?completedStyle:null}>{props.item.text}</h3>
    
        </div>
    )

}

export default Todo;