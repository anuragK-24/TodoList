import React, { useState } from 'react';

export const AddTodo = ({addTodo}) => {
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
     const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("Title or Description can't be blanked");
        }
        else{
            addTodo(title,desc);
            setTitle("");
            setDesc("");
        }
     }   

  return (
    <div className="container my-3 "  >
        <h3>Add Task</h3>
        <form onSubmit={submit}>  
            {/* this line will call AddTodo as soon as we click on add Task button  */}
            <div className="mb-3">
                    <label htmlFor="title" className="htmlForm-label">Todo Title</label>
                    <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} className="htmlForm-control" id="title" aria-describedby="emailHelp"/>
                    
            </div>
        <div className="mb-3">
            <label htmlFor="desc" className="htmlForm-label">Password</label>
            <input type="text" value={desc} onChange={(e)=>setDesc(e.target.value)} className="htmlForm-control" id="desc"/>
        </div>
            <button type="submit" className="btn btn-sm btn-success">Add Task</button> 
            {/* btn-sm will change the size of the button and btn-success will change the colour of the button to green, btn-primary will change the colour to blue */}
        </form>
    </div>
  )
}
