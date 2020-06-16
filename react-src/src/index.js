import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Work from "./pages/Work";
import About from "./pages/About";
import Latest from "./pages/Latest";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App}/>
      <Route exact path="/work" component={Work}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/latest" component={Latest}/>
      <Route exact path="/careers" component={Careers}/>
      <Route exact path="/contact" component={Contact}/>
    </Switch>
  </BrowserRouter>
  , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
