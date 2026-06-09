import React from 'react'
import TodoItem from './TodoItem'

const Todos = (props) => {
  return (
    <div className="container">

      <h3 className='text-center my-3 kaushan'>
        Todos List
      </h3>

      {props.todos.length === 0 ? (
        <h4 className="text-danger text-center my-4">
          No Todos To Display...
        </h4>
      ) : (
        props.todos.map((todo) => {
          return (
            <div className="mb-3" key={todo.sno}>
              <TodoItem
                todo={todo}
                onDelete={props.onDelete}
              /><hr/>
            </div>
          )
        })
      )}

    </div>
  )
}

export default Todos