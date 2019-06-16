import React from "react"

import "./appHeader.css"

const appHeader = ({ todo, done }) => {
  return (
    <div className="app-header d-flex">
      <h1>Todo List</h1>
      <h2>
        {todo} more task left, {done} tasks done
      </h2>
    </div>
  )
}

export default appHeader
