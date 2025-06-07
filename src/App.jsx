import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import NewItem from './pages/NewItem'
import EditItem from './pages/EditItem'
import Login from './pages/Login'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 p-4">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/novo' element={<NewItem />} />
        <Route path='/editar/:id' element={<EditItem />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  )
}