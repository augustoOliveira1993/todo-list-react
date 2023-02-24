import React from 'react'
import ReactDOM from 'react-dom/client'
import {TodoList} from "./pages/TodoList.jsx";
import './css/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TodoList />
  </React.StrictMode>,
)
