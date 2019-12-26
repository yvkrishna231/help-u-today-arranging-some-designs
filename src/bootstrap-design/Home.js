import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div>
                <nav className='navbar navbar-expand-sm shadow nav-bar-expand bg-info mt-4 navbar-dark'>
                    <i className="fa fa-etsy mr-2 text-light" aria-hidden="true"></i>
                    <a className='navbar-brand' href='#'>NAVBAR</a>
                    <ul className='navbar-nav'>
                        <li className='nav-item'>
                            <a className='nav-link text-dark' href='#'>About</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link text-dark' href='#'>Home</a>
                        </li>
                    </ul>
                    <ul className='navbar-nav ml-auto'>
                        <li className='nav-item'>
                            <form className='form-inline'>
                                <button className='btn btn-light mr-1'> <i className="fa fa-search" htmlFor='button1' aria-hidden="true"></i></button>
                                <input id='button1' className='form-control' />
                            </form>
                        </li>
                        <li className='nav-item'>
                            <button className='btn btn-danger ml-1'>button</button>
                        </li>
                    </ul>
                    <ul className='navbar-nav ml-auto'>
                        <li className='nav-item'>
                            <form className='form-inline'>
                                <button className='btn btn-light mr-1'> <i className="fa fa-search" htmlFor='button' aria-hidden="true"></i></button>
                                <input id='button' className='form-control' />
                            </form>
                        </li>
                        <li className='nav-item'>
                            <button className='btn btn-danger ml-1'>button</button>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Home;