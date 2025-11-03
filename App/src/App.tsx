import './App.css'
import { Dashboard } from './pages/Dashboard'
import { Login } from './pages/Login'


import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { SharedDashboard } from './pages/SharedDashboard'

function App() {
  return <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path = '/api/brain/:sharelink' element={<SharedDashboard/>}  />
    </Routes>
  </BrowserRouter>
}

export default App
