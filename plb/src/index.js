import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './components/Home.js';
import About from './components/About.js';
import Contact from './components/Contact.js';
import Header from './components/Header.js';
import Slideshow from './components/Slideshow.js'
import Footer from './components/Footer.js'

const App = () => {
    return (<div>
        <Header/>
        <Home/>
        <Footer/>
    </div>)
}

ReactDOM.render(<App/>, document.getElementById('root'));