import React, { Component, Fragment } from 'react';
// import image from '../clouds.jpg'

class Navbar extends Component {
    render() {
        return (
            <Fragment>
                <nav className='navbar navbar-expand-sm shadow nav-bar-expand bg-danger navbar-dark'>
                    <i className="fa fa-etsy mr-2 text-light" aria-hidden="true"></i>
                    <a className='navbar-brand' href='#'>NAVBAR</a>
                    <ul className='navbar-nav'>
                        <li className='nav-item'>
                            <a className='nav-link ' href='#'>
                                <select id='items' className='rounded-lg'>
                                    <option>About1</option>
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
            </Fragment>
        );
    }
}

export default Navbar;