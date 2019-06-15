import React from "react"

import "./todoListItem.css"

export default class TodoListItem extends React.Component {
  render() {
    const {
      label,
      onDeleted,
      onToggleImportant,
      onToggleDone,
      important,
      done
    } = this.props

    let classNames = "todo-list-item"
    if (done) {
      classNames += "done"
    }

    if (important) {
      classNames += "important"
    }

    return (
      <span className={classNames}>
        <span onClick={onToggleDone} className="todo-list-item-label">
          {label}
        </span>

        <button
          onClick={onToggleImportant}
          type="button"
          className="btn btn-outline-success btn-sm float-right"
        >
          <i className="fa fa-exclamation" />
        </button>
        <button
          onClick={onDeleted}
          type="button"
          className="btn btn-outline-danger btn-sm float-right"
        >
          <i className="fa fa-trash-o" />
        </button>
      </span>
    )
  }
}
