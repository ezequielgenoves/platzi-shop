import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
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
      <HashRouter basename='/platzi-shop'> 
        <Layout>
          <Routes>
            <Route exact path='/' Component={Home} />
            <Route exact path='/login' Component={Login} />
            <Route
              exact
              path='/password/recovery'
              Component={PasswordRecovery}
            />
            <Route exact path='/send-email' Component={SendEmail} />
            <Route exact path='/password/new' Component={NewPassword} />
            <Route exact path='/account' Component={MyAccount} />
            <Route exact path='/signup' Component={CreateAccount} />
            <Route exact path='/checkout' Component={Checkout} />
            <Route exact path='/orders' Component={Orders} />
            <Route path='*' Component={NotFound} />
          </Routes>
        </Layout>
      </HashRouter>
    </AppContext.Provider>
  )
}

export default App
