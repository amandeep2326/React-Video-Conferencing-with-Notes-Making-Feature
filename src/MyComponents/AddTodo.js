import React, { useState } from 'react';
import './AddTodo.css';
export const AddTodo = ({ addTodo }) => {
    const [desc, setDesc] = useState("");


    const submit = (e) => {
        e.preventDefault();
        if (!desc) {
            alert("Description cannot be blank");
        }
        else {
            addTodo(, desc);
            setDesc("");
        }
    }
    return (
        <div className="container my-3">
            <h3>Add your Notes</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Notes Description</label>
                    <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)} className="form-control" id="desc" />
                </div>
                <button type="submit" className="btn btn-sm btn-success">Add Notes</button>
            </form>
        </div>
    )
}
