import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ApplyJob from './pages/ApplyJob'
import Dashboard from './pages/Dashboard'
import Success from './pages/Success'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/apply' element={<ApplyJob />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/success' element={<Success />} />
    </Routes>
  )
}

export default App