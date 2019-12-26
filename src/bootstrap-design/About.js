import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <div>
                <nav className='navbar navbar-expand-sm shadow nav-bar-expand bg-dark mt-4 navbar-dark'>
                    <i className="fa fa-etsy mr-2 text-light" aria-hidden="true"></i>
                    <a className='navbar-brand' href='#'>NAVBAR</a>
                    <ul className='navbar-nav'>
                        <li className='nav-item'>
                            <a className='nav-link' href='#'>
                                <select className='rounded-lg' id='items'>
                                    <option>About</option>
                                    <option>home</option>
                                    <option>contact</option>
                                    <option>help</option>
                                </select>
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href='#'>
                                <select className='rounded-lg'>
                                    <option>About</option>
                                    <option>home</option>
                                    <option>contact</option>
                                    <option>help</option>
                                </select>
                            </a>
                        </li>
                    </ul>
                    <ul className='navbar-nav ml-auto'>
                        <li className='nav-item'>
                            <a className='nav-link' href='#'>
                                <select className='rounded-lg'>
                                    <option>About</option>
                                    <option>home</option>
                                    <option>contact</option>
                                    <option>help</option>
                                </select>
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href='#'>
                                <select className='rounded-lg'>
                                    <option>About</option>
                                    <option>home</option>
                                    <option>contact</option>
                                    <option>help</option>
                                </select>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default About;