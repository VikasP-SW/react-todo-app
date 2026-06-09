import React from 'react'

const About = () => {
  return (
    <div className="container my-5">

      <h2 className="kaushan text-center mb-4">
        About My Todo List App
      </h2>

      <p>
        This Todo List application is built using React.js and Bootstrap.
        It helps users manage their daily tasks in a simple and efficient way.
      </p>

      <p>
        Users can add new todos, delete completed tasks, and store their
        data using localStorage so that tasks remain saved even after
        refreshing the page.
      </p>

      <p>
        The application also uses React Router for navigation between
        different pages like Home and About without reloading the website.
      </p>

      <p>
        This project was created for learning React concepts such as
        components, props, hooks, state management, forms, conditional
        rendering, routing, and local storage handling.
      </p>

      <p>
        Designed and developed by Vikas Ankush Pawar 🚀
      </p>

    </div>
  )
}

export default About