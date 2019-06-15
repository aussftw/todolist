import React from "react"

import "./todoList.css"
import TodoListItem from "../TodoListItem/todoListItem"

const todoList = ({ todos, onDeleted, onToggleImportant, onToggleDone }) => {
  const elements = todos.map(item => {
    const { id, ...itemProps } = item
    return (
      <li key={id} className="list-group-item">
        <TodoListItem
          {...itemProps}
          onDeleted={() => onDeleted(id)}
          onToggleDone={() => onToggleDone(id)}
          onToggleImportant={() => onToggleImportant(id)}
        />
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
