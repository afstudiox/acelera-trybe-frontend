import { Route, Routes, Navigate} from 'react-router-dom'
import Login from './pages/Login'
import TodoList from './pages/TodoList'
import AddTodo from './pages/AddTodo'
import './App.css'

function App() {

  return (
    <>
      <Routes>
        <Route path='/todo/add' element={<AddTodo />} />
        <Route path='/todo' element={<TodoList />} />
        <Route path='/' element={<Login />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </>
  )
}

export default App
