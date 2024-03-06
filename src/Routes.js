// import { HomeSharp } from '@material-ui/icons'
import React from "react";
import { BrowserRouter, Route, Routes as Routers } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
function Routes() {
  return (
    //   <Router>
    //   <Routers>
    //   <Route
    //       path="/"
    //       element={<Home />}
    //     />
    //   <Route
    //       path="Login"
    //       element={<Login />}
    //     />
    //     {/* <Route path="/products/:category">
    //       <ProductList />
    //     </Route>
    //     <Route path="/product/:id">
    //       <Product />
    //     </Route>
    //     <Route path="/cart">
    //       <Cart />
    //     </Route>
    //     <Route path="/success">
    //       <Success />
    //     </Route>
    //     <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
    //     <Route path="/register">
    //       {user ? <Redirect to="/" /> : <Register />}
    //     </Route> */}
    //   </Routers>
    // </Router>
    <BrowserRouter>
      <Routers>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routers>
    </BrowserRouter>
  );
}

export default Routes;
