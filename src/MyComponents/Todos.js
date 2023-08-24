import React from 'react'
import {TodoItem} from "./TodoItem";

export const Todos = (props) => {
  let myStyle = {
    minHeight:"70vh",
    margin:"40px auto",
    textAlign:"center"
  }
  return (
    <div className="container my-3 " style={myStyle}>
      {/* here my-3 used to give padding to Todos List 
      and text-center is used to locate the text in the center */}
      <h3 style={{textAlign:"center"}} >Todos List</h3> 
      {props.todos && props.todos.length === 0 ? <h3 style={{color:"grey", marginTop:"2em"}}>No todos to display</h3> :
      props.todos.map((todo)=> {
        return( <TodoItem todo = {todo} key={todo.sno} onDelete={props.onDelete}/> 
      
        )

         // if we want to return more than one tags in the jsx so we will wrap the content in the return (<></> )
      })
      }
      
    </div>
  )
}
