import React from "react";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { Home } from "./components/Home";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { DataProvider } from "./components/DataProvider";
import { Details } from "./components/Details";
import { Cart } from "./components/Cart";
import { Contact } from "./components/Contact";
import { About } from "./components/About";

export const App = () => {
  return (
    <DataProvider>
      <Router>
        <Header />
        <Switch>
          <Route path="/contact">
           <Contact />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/products/:id">
            <Details />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </DataProvider>
  );
};
