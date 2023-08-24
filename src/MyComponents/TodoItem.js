import React from 'react'

export const TodoItem = ({todo, onDelete}) => {
  return (
    <center>
      <div  style={{border:"1px solid black", borderRadius:"1em",alignItems:"center", backgroundColor:"#00edff",width:"50%" , padding:"1em",textAlign:"center"}}>
        {console.log(todo," This is obj")}

          <h5 style={{textAlign:"initial", block:"none"}}>{todo.sno}</h5>
          <h4 style={{textAlign:"center"}}>{todo.title}</h4>
          <p>{todo.desc}</p>
          <button className="btn btn-sm btn-danger" onClick={() => {onDelete(todo)}}
            >Delete</button>
          {/* if we passs onDelete() all three button fire with starting of the website  */}
      </div>
      <hr />
      </center>
  )
}
