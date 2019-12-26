import React, { Component } from 'react';
import Navbar from './Navbar';
import '../App.css'
import About from './About';
import Home from './Home';
import Style1 from './Style1';

class App extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <About />
                <Home />
                <Style1 />
            </div>
        );
    }
}

export default App;