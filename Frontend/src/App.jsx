import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Start from './pages/Start'
import UserLogin from './pages/UserLogin'
import UserSignup from './pages/UserSignup'
import CaptainLogin from './pages/CaptainLogin'
import CaptainSignup from './pages/CaptainSignup'
import Home from './pages/Home'
import UserProtectetWrapper from './pages/UserProtectetWrapper'
import UserLogout from './pages/UserLogout'
import CaptainHome from './pages/CaptainHome'
import CaptainProtectWrapper from './pages/CaptainProtectWrapper'
import Riding from './pages/Riding'
import CaptainRiding from './pages/CaptainRiding'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Start />}></Route>
      <Route path='/login' element={<UserLogin />}></Route>
      <Route path='/riding' element={<Riding />}></Route>
      <Route path='/captain-riding' element={<CaptainRiding />}></Route>
      <Route path='/signup' element={<UserSignup />}></Route>
      <Route path='/captain-login' element={<CaptainLogin />}></Route>
      <Route path='/captain-signup' element={<CaptainSignup />}></Route>
      <Route path='/home' element={
        <UserProtectetWrapper> <Home /> </UserProtectetWrapper> }>
      </Route>
      <Route path='/user/logout' element={
        <UserProtectetWrapper>
          <UserLogout />
        </UserProtectetWrapper>} />
      <Route path='/captain-home' element={
        <CaptainProtectWrapper>
          <CaptainHome/>
        </CaptainProtectWrapper>} />
    </Routes>
  )
}

export default App