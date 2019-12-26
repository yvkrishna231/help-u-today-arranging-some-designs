import React, { Component } from 'react';
import imageShield from './shield.jpg'

class NavBar extends Component {
    render() {
        return (
            <div>
                <nav className='navbar navbar-expand bg-danger navbar-light'>
                    <img className='navbar-brand m-0' alt='pie charts' src={imageShield} height='40px' width='34px' />
                    <b style={{ fontWeight: '400', fontSize: '28px' }} className='mb-0 ml-1 text-light'>ATS</b>
                    <ul className='navbar-nav'>
                        <li className='nav-item'>
                            <div className='nav-link ml-5 text-light'>
                                <i className="fa fa-th-large mr-1" aria-hidden="true"></i>
                                <a style={{ textDecoration: 'none' }} href='#' className='text-light'>Dashboard</a>
                                <div style={{ borderBottom: '2px solid yellow' }}></div>
                            </div>
                        </li>
                        <li className='nav-item'>
                            <div className='nav-link ml-5 text-light'>
                                <i className="fa fa-envelope mr-2" aria-hidden="true"></i>
                                <a style={{ textDecoration: 'none' }} href='#' className='text-light'>Jobs</a>
                            </div>
                        </li>
                        <li className='nav-item'>
                            <div className='nav-link ml-5 text-light'>
                                <i className="fa fa-users mr-2" aria-hidden="true"></i>
                                <a style={{ textDecoration: 'none' }} href='#' className='text-light'>Mt Team</a>
                            </div>
                        </li>
                        <li className='nav-item'>
                            <div className='nav-link ml-5 text-light'>
                                <i className="fa fa-user-o mr-2" aria-hidden="true"></i>
                                <a style={{ textDecoration: 'none' }} href='#' className='text-light'>Candidates</a>
                            </div>
                        </li>
                        <li className='nav-item'>
                            <div className='nav-link ml-5 text-light'>
                                <i className="fa fa-id-badge mr-2" aria-hidden="true"></i>
                                <a style={{ textDecoration: 'none' }} href='#' className='text-light'>PipLine</a>
                            </div>
                        </li>
                        <li className='nav-item'>
                            <div className='nav-link ml-5 text-light'>
                                <i className="fa fa-file-text-o mr-2" aria-hidden="true"></i>
                                <a style={{ textDecoration: 'none' }} href='#' className='text-light'>Report</a>
                            </div>
                        </li>
                        <li className='nav-item'>
                            <div className='nav-link ml-5 text-light'>
                                <i className="fa fa-file-text-o mr-2" aria-hidden="true"></i>
                                <a style={{ textDecoration: 'none' }} href='#' className='text-light'>Internal DB</a>
                            </div>
                        </li>
                    </ul>
                    <ul className='navbar-nav ml-auto'>
                        <li className='nav-item'>
                            <div className='nav-link text-light'>
                                <a style={{ textDecoration: 'none' }} href='#' className='text-light'>
                                    <i className="fa fa-search" aria-hidden="true"></i>
                                </a>

                            </div>
                        </li>
                        <li className='nav-item'>
                            <div className='nav-link text-light'>
                                <a style={{ textDecoration: 'none' }} href='#' className='text-light'>
                                    <i className="fa fa-calendar" aria-hidden="true"></i>
                                </a>

                            </div>
                        </li>
                        <li className='nav-item'>
                            <div className='nav-link text-light'>
                                <a style={{ textDecoration: 'none' }} href='#' className='text-light'> <i className="fa fa-bell-o" aria-hidden="true"></i>
                                    <i>8</i></a>
                            </div>
                        </li>
                        <li className='nav-item'>
                            <div className='nav-link text-light'>
                                <a style={{ textDecoration: 'none' }} href='#'> <img style={{ borderRadius: '50%' }} alt='pie charts' src={imageShield} height='35px' width='35px' /></a>
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default NavBar;