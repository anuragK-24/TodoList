import React from 'react'
import {TodoItem} from "./TodoItem";

export const Todos = (props) => {
  let myStyle = {
    minHeight:"70vh",
    margin:"40px auto"
  }
  return (
    <div className="container my-3 " style={myStyle}>
      {/* here my-3 used to give padding to Todos List 
      and text-center is used to locate the text in the center */}
      <h3 className="my-3" >Todos List</h3> 
      {props.todos.length === 0? <h3>No todos to display</h3> :
      props.todos.map((todo)=> {
        return( <TodoItem todo = {todo} key={todo.sno} onDelete={props.onDelete}/> 
      
        )

         // if we want to return more than one tags in the jsx so we will wrap the content in the return (<></> )
      })
      }
      
    </div>
  )
}
