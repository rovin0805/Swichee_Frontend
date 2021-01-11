import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Home from "Routes/Home";
import Search from "Routes/Search";
import Company from "Routes/Company";
import Header from "Components/Header";
import Detail from "Routes/Detail";
import Category from "Routes/Category";
import User from "Routes/User";

const Router = () => (
  <BrowserRouter>
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/search" component={Search} />
        <Route path="/company" component={Company} />
        <Route path="/posting" component={Detail} />
        <Route path="/category/:term" component={Category} />
        <Route path="/user" component={User} />
        <Redirect from="*" to="/" />
      </Switch>
    </>
  </BrowserRouter>
);

export default Router;
