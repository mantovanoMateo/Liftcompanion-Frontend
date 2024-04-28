import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Landing from './pages/landing'
import Login from './pages/login'
import Home from './pages/home'
import ExcersiceManger from './pages/excersiceManger'
import Newlift from './pages/newlift'
import PercentageManager from './pages/percentageManager'
import ExcersiceView from './pages/excersiceView'
import Settings from './pages/settings'
import PasswordChanger from './pages/passwordChanger'
import Navbar from './components/navbar'
import Register from './pages/register'

import bg from './assets/bgAppMob.png'
import { AuthProvider } from './context/AuthContext'


function App() {
  return (
    <div className='landingBg' style={{ backgroundImage: `url(${bg})` }}>
      <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/home' element={<Home />} />
            <Route path='/lift-manager' element={<ExcersiceManger />} />
            <Route path='/lift/:id' element={<ExcersiceView />} />
            <Route path='/add-lift' element={<Newlift />} />
            <Route path='/percentage-manager' element={<PercentageManager />} />
            <Route path='/settings' element={<Settings />} />
            <Route path='/password-change' element={<PasswordChanger />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>

    </div>
  )
}

export default App
