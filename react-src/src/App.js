import React from "react";
import Home from "./pages/Home";
import Work from "./pages/Work";
import About from "./pages/About";
import Latest from "./pages/Latest";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/work" component={Work} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/latest" component={Latest} />
                    <Route exact path="/careers" component={Careers} />
                    <Route exact path="/contact" component={Contact} />
                </Switch>
            </BrowserRouter>
        </>
    );
}

export default App;
