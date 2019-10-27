import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route} from 'react-router-dom';

import Home from './components/Home.js';
import About from './components/About.js';
import Contact from './components/Contact.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js'


const App = () => {
    return (<div>
        <Header/>
        <BrowserRouter>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
        </BrowserRouter>
        <Footer/>
    </div>)
}

ReactDOM.render(<App/>, document.getElementById('root'));