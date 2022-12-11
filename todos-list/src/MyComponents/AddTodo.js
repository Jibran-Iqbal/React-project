import React, { useState } from 'react'

const AddTodo = (props) => {


    const [title,setTitle] = useState("");
    const [desc,setDesc] = useState("");


    const submit=(e)=>{
        e.preventDefault();//With this the page won't reload
        if(!title || !desc)
        {
            alert("Title or Description cannot be blank")
        }
        else
        {
            props.addTodo(title,desc)
            setTitle("")
            setDesc("")
        }
    };
    return (
        // my-3 means add a margin of 3 on y-axis


        <div className='container my-3 '>
            <h3>Add a task</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Task Name</label>
                    <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} className="form-control" id="title" aria-describedby="emailHelp"/>
                    
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Description</label>
                    <input type="text" value={desc} onChange={(e)=>setDesc(e.target.value)} className="form-control" id="desc"/>
                </div>
                <button type="submit" className="btn btn-sm btn-success">Add Task</button>
            </form>
        </div>
    )
}

export default AddTodo
