import React from "react"

import "./todoList.css"
import TodoListItem from "../TodoListItem/todoListItem"

const todoList = ({ todos }) => {
  const elements = todos.map(item => {
    return (
      <li key={item.id} className="list-group-item">
        <TodoListItem label={item.label} important={item.important} />
      </li>
    )
  })
  return (
    <div className="todo-list list-group">
      <ul>{elements}</ul>
    </div>
  )
}

export default todoList
