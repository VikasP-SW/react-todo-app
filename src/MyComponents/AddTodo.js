import React, { useState } from 'react'

const AddTodo = ({ addTodo }) => {

    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');

    const submit = (e) => {
        e.preventDefault();

        if (!title || !desc) {
            alert("Title or Description cannot be blank");
            return;
        }

        addTodo(title, desc);

        setTitle("");
        setDesc("");
    }

    return (
        <div className="container my-3">

            <h3 className="text-center my-3 kaushan">
                Add Todo
            </h3>

            <form onSubmit={submit}>

                <div className="mb-3">
                    <label htmlFor="title" className="form-label">
                        Todo Title
                    </label>

                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">
                        Todo Description
                    </label>

                    <input
                        type="text"
                        className="form-control my-2"
                        placeholder="Todo Description"
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}
                        list="descOptions"
                    />

                    <datalist id="descOptions">
                        <option value="Go to market" />
                        <option value="Go to mall" />
                        <option value="Study React" />
                        <option value="Do coding practice" />
                    </datalist>
                </div>

                <button type="submit" className="btn btn-sm btn-success">
                    Submit
                </button>

            </form>

        </div>
    )
}

export default AddTodo