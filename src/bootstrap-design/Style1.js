import React, { Component } from 'react';
import shield from './shield.jpg'
import image from '../elephant.jpg'

class Style1 extends Component {
    render() {
        return (
            <div>
                <nav className='navbar navbar-expand-lg shadow bg-dark mt-4 navbar-dark'>
                    <i className='fa fa-user navbar-brand'></i>
                    <a className='navbar-brand' href='#'>Navbar</a>
                    <ul className='navbar-nav'>
                        <li className='nav-item'>
                            <a className='nav-link text-light' href='#'>SIgnIn</a>
                        </li>
                    </ul>
                    <ul className='navbar-nav ml-auto'>
                        <li className='nav-item'>
                            <a className='nav-link text-light' href='#'>SIgnIn</a>
                        </li>
                        <li className='nav-item'>
                            <form className='form-inline'>
                                <label htmlFor='search' className='shadow mr-1 bg-light'><i className='fa fa-search nav-link text-dark'></i></label>
                                <input id='search' className='form-control' />
                            </form>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link p-1 ml-1' href='#'>
                                <img src={shield} height='35px' width='35px' className='rounded-circle' />
                            </a>
                        </li>
                    </ul>
                </nav>
                <nav className='navbar navbar-expand-lg shadow bg-light mt-4 navbar-light'>
                    <i className='fa fa-handshake-o navbar-brand'></i>
                    <a className='navbar-brand' href='#'>Navbar</a>
                    <ul className='navbar-nav'>
                        <li className='nav-item'>
                            <a className='nav-link text-dark' href='#'>SIgnIn</a>
                        </li>
                    </ul>
                    <ul className='navbar-nav ml-auto'>
                        <li className='nav-item'>
                            <a className='nav-link text-dark' href='#'>SIgnIn</a>
                        </li>
                        <li className='nav-item'>
                            <form className='form-inline'>
                                <label htmlFor='search1' className='shadow mr-1 bg-light'><i className='fa fa-search nav-link text-dark'></i></label>
                                <input id='search1' className='form-control' />
                            </form>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link p-1 ml-1' href='#'>
                                <img src={image} height='35px' width='35px' className='rounded-circle' />
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Style1;