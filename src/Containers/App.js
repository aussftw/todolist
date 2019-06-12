import React from "react"

import AppHeader from "../Components/appHeader/appHeader"
import ItemStatusFilter from "../Components/ItemStatusFilter/ItemStatusFilter"
import SearchPanel from "../Components/SearchPanel/searchPanel"
import TodoList from "../Components/TodoList/todoList"

const App = () => {
  const todoData = [
    { label: "Drink Coffee", important: false, id: 1 },
    { label: "Make app", important: true, id: 2 },
    { label: "have a lunch", important: false, id: 3 }
  ]

  return (
    <div>
      <AppHeader />
      <SearchPanel />
      <ItemStatusFilter />
      <TodoList todos={todoData} />
    </div>
  )
}

export default App
