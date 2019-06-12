import React from "react"

import "./todoListItem.css"

export default class TodoListItem extends React.Component {
  // constructor(props) {
  //   super(props)

  //   this.onLabelClick = () => {
  //     console.log(`Done: ${this.props.label}`)
  //   }
  // }

  constructor() {
    super()
    this.state = {
      done: false,
      important: false
    }
  }

  onLabelClick = () => {
    this.setState({ done: true })
  }

  onMarkImportant = () => {
    this.setState({ important: true })
  }

  render() {
    console.log(this.state)
    const { label } = this.props
    const { done, important } = this.state

    let classNames = "todo-list-item"
    if (done) {
      classNames += "done"
    }

    if (important) {
      classNames += "important"
    }

    return (
      <span className={classNames}>
        <span onClick={this.onLabelClick} className="todo-list-item-label">
          {label}
        </span>

        <button
          onClick={this.onMarkImportant}
          type="button"
          className="btn btn-outline-success btn-sm float-right"
        >
          <i className="fa fa-exclamation" />
        </button>
        <button
          type="button"
          className="btn btn-outline-danger btn-sm float-right"
        >
          <i className="fa fa-trash-o" />
        </button>
      </span>
    )
  }
}
