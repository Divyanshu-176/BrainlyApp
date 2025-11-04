import './App.css'
import { Dashboard } from './pages/Dashboard'
import { Login } from './pages/Login'


import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { SharedDashboard } from './pages/SharedDashboard'
import { Signup } from './pages/Signup'
import { Signin } from './pages/Signin'

function App() {
  return <BrowserRouter>
    <Routes>
      <Route path='/' element={<Signup/>}/>
      <Route path='/signin' element={<Signin/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path = '/api/brain/:sharelink' element={<SharedDashboard/>}  />
    </Routes>
  </BrowserRouter>
}

export default App
