import React from 'react'

const TodoItem = ({todo, onDelete}) => {
  return (
    <div>
      <h4 className="kaushan bold text-success">{todo.title}</h4>
      <p>{todo.desc}</p>
      <button className="btn btn-sm btn-danger kaushan" onClick={() => onDelete(todo)}>Delete</button>
    </div>
  )
}

export default TodoItem
