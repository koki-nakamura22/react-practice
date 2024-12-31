import { Route, Routes } from 'react-router-dom'
// import './App.css'
import TodoPage from './pages/TodoPage'

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<TodoPage />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </div>
  )
}

export default App
