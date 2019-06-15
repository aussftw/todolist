import React from "react"

import "./searchPanel.css"

export default class searchPanel extends React.Component {
  state = {
    term: ""
  }

  onTermChange = e => {
    const { onSearchChange = () => {} } = this.props
    this.setState({
      term: e.target.value
    })

    onSearchChange(e.target.value)
  }

  render() {
    return (
      <input
        placeholder="search"
        type="text"
        className="form-control search-input"
        value={this.state.term}
        onChange={this.onTermChange}
      />
    )
  }
}
