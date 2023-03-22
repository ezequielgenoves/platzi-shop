import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from '@containers/Layout'
import Home from '@pages/Home'
import Login from '@pages/Login'
import PasswordRecovery from '@pages/PasswordRecovery'
import SendEmail from '@pages/SendEmail'
import NewPassword from '@pages/NewPassword'
import MyAccount from '@pages/MyAccount'
import CreateAccount from '@pages/CreateAccount'
import Checkout from '@pages/Checkout'
import Orders from '@pages/Orders'
import NotFound from '@pages/NotFound'
import '@styles/global.css'
import AppContext from '@context/AppContext'
import useInitialState from '@hooks/useInitialState'

const App = () => {
  const initialState = useInitialState()
  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' Component={Home} />
            <Route path='/login' Component={Login} />
            <Route path='/password/recovery' Component={PasswordRecovery} />
            <Route path='/send-email' Component={SendEmail} />
            <Route path='/password/new' Component={NewPassword} />
            <Route path='/account' Component={MyAccount} />
            <Route path='/signup' Component={CreateAccount} />
            <Route path='/checkout' Component={Checkout} />
            <Route path='/orders' Component={Orders} />
            <Route path='*' Component={NotFound} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  )
}

export default App
