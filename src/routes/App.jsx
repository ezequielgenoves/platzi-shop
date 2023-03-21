import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@containers/Layout";
import Home from "@pages/Home";
import Login from "@pages/Login";
import PasswordRecovery from "@pages/PasswordRecovery";
import SendEmail from "@pages/SendEmail";
import NewPassword from "@pages/NewPassword";
import MyAccount from "@pages/MyAccount";
import CreateAccount from "@pages/CreateAccount";
import Checkout from "@pages/Checkout";
import Orders from "@pages/Orders";
import NotFound from "@pages/NotFound";
import "@styles/global.css";

const App = () => {
  console.log("hola app");
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route exact path="/login" Component={Login} />
          <Route exact path="/password/recovery" Component={PasswordRecovery} />
          <Route exact path="/send-email" Component={SendEmail} />
          <Route exact path="/password/new" Component={NewPassword} />
          <Route exact path="/account" Component={MyAccount} />
          <Route exact path="/signup" Component={CreateAccount} />
          <Route exact path="/checkout" Component={Checkout} />
          <Route exact path="/orders" Component={Orders} />
          <Route path="*" Component={NotFound} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
