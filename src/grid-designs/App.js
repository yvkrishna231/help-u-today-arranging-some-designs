import React, { Component } from 'react';
import '../App.css';
import image1 from './2.jpg';
import pieChart from './pie-chart.png'
import pyramid from './pyramid.png'
import NavBar from './NavBar';

class App extends Component {

    render() {
        return (
            <div className='shadow p-3 w-0 border' style={{ padding: '0px 30px' }}>
                <div>
                    <NavBar />
                </div>
                <div className='container-fluid'>
                    <div className='pt-4 pb-3 col-lg-12 col-12 col-sm-12'>
                        <h4 style={{ fontWeight: '300' }} >Welcome
                        <b>John !</b>
                            lorem ipsium dolar sit amet,consecuiteradipisingelit.
                            phaselus luctus</h4>
                    </div>
                    <div className='row'>
                        <div className='col-lg-2 col-sm-12 col-12 text-center'>
                            <div id='styles' className='shadow p-1'>
                                <h5>Hello World</h5>
                                <div className='row'>
                                    <div className='col-lg-6 col-sm-6 col-6'>
                                        <div>
                                            <b style={{ fontSize: '20px', margin: '0px' }}>15</b><br></br>
                                            <small>new</small><br></br>
                                            <small>20</small>
                                        </div>
                                    </div>
                                    <div className='col-lg-6 col-sm-6 col-6'>
                                        <div>
                                            <b style={{ fontSize: '20px', margin: '0px' }}>15</b><br></br>
                                            <small>new</small><br></br>
                                            <small>20</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-2 col-12 col-sm-12 text-center'>
                            <div id='styles' className='shadow p-1'>
                                <h5>Total Applicant</h5>
                                <small style={{ fontSize: '50px' }}>150</small>
                            </div>
                        </div>
                        <div className='col-lg-2 col-12 col-sm-12 text-center'>
                            <div id='styles' className='shadow p-1'>
                                <h5>Offers</h5>
                                <small style={{ fontSize: '50px' }}>08</small>
                            </div>
                        </div>
                        <div className='col-lg-2 col-12 col-sm-12 text-center'>
                            <div id='styles' className='shadow p-1'>
                                <h5>Offers Released</h5>
                                <small style={{ fontSize: '50px' }}>02</small>
                            </div>
                        </div>
                        <div className='col-lg-2 col-12 col-sm-12 text-center'>
                            <div id='styles' className='shadow p-1'>
                                <h5>Team Hires</h5>
                                <small style={{ fontSize: '50px' }}>15</small>
                            </div>
                        </div>
                        <div className='col-lg-2 col-12 col-sm-12 text-center'>
                            <div id='styles' className='shadow p-1'>
                                <h5>New Requestions</h5>
                                <small style={{ fontSize: '50px' }}>25</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container-fluid mt-3'>
                    <div className='row'>
                        <div className='col-lg-8 col-sm-8 col-8 p-0 border text-center'>
                            <div>
                                <nav className='navbar navbar-expand-lg navbar-expand-sm navbar- bg-dark navbar-dark'>
                                    <b className='navbar-brand'>Open job summary</b>
                                    <ul className='navbar-nav ml-auto'>
                                        <li className='nav-item'>
                                            <a style={{ textDecoration: 'none' }} href='#'
                                                className='nav-link text-light'>View All</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <div style={{ fontSize: '15px' }}>
                                <table className='table table-hover'>
                                    <thead>
                                        <tr>
                                            <th style={{ color: 'lightslategrey' }}>job role &<br></br> location</th>
                                            <th style={{ color: 'lightslategrey' }}>Hiring manager</th>
                                            <th style={{ color: 'lightslategrey' }}>Recruiter</th>
                                            <th style={{ color: 'lightslategrey' }}>New</th>
                                            <th style={{ color: 'lightslategrey' }}>Screeming</th>
                                            <th style={{ color: 'lightslategrey' }}>interview</th>
                                            <th style={{ color: 'lightslategrey' }}>background chock</th>
                                            <th style={{ color: 'lightslategrey' }}>offer released</th>
                                            <th style={{ color: 'lightslategrey' }}>Due date</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr >
                                            <td className='text-info'><a
                                                style={{ textDecoration: 'none' }} href='#'>
                                                java Developer<br></br>
                                                <small>Hyderabad,india</small>
                                            </a></td>
                                            <td>Srinivas Rao Desai</td>
                                            <td>Harish</td>
                                            <td className='text-info'>10</td>
                                            <td className='text-info'>5</td>
                                            <td className='text-info'>0</td>
                                            <td>15</td>
                                            <td className='text-info'>2</td>
                                            <td>28/08/2019</td>
                                        </tr>
                                        <tr>
                                            <td className='text-info'><a
                                                style={{ textDecoration: 'none' }} href='#'>
                                                java Developer<br></br>
                                                <small>Hyderabad,india</small>
                                            </a></td>
                                            <td>Srinivas Rao Desai</td>
                                            <td>Harish</td>
                                            <td className='text-info'>10</td>
                                            <td className='text-info'>5</td>
                                            <td className='text-info'>0</td>
                                            <td>15</td>
                                            <td className='text-info'>2</td>
                                            <td>28/08/2019</td>
                                        </tr>
                                        <tr>
                                            <td className='text-info'> <a
                                                style={{ textDecoration: 'none' }} href='#'>
                                                java Developer<br></br>
                                                <small>Hyderabad,india</small>
                                            </a></td>
                                            <td>Srinivas Rao Desai</td>
                                            <td>Harish</td>
                                            <td className='text-info'>10</td>
                                            <td className='text-info'>5</td>
                                            <td className='text-info'>0</td>
                                            <td>15</td>
                                            <td className='text-info'>2</td>
                                            <td>28/08/2019</td>
                                        </tr>
                                        <tr>
                                            <td className='text-info'><a
                                                style={{ textDecoration: 'none' }} href='#'>
                                                java Developer<br></br>
                                                <small>Hyderabad,india</small>
                                            </a></td>
                                            <td>Srinivas Rao Desai</td>
                                            <td>Harish</td>
                                            <td className='text-info'>10</td>
                                            <td className='text-info'>5</td>
                                            <td className='text-info'>0</td>
                                            <td>15</td>
                                            <td className='text-info'>2</td>
                                            <td>28/08/2019</td>
                                        </tr>
                                        <tr>
                                            <td className='text-info'> <a
                                                style={{ textDecoration: 'none' }} href='#'>
                                                java Developer<br></br>
                                                <small>Hyderabad,india</small>
                                            </a></td>
                                            <td>Srinivas Rao Desai</td>
                                            <td>Harish</td>
                                            <td className='text-info'>10</td>
                                            <td className='text-info'>5</td>
                                            <td className='text-info'>0</td>
                                            <td>15</td>
                                            <td className='text-info'>2</td>
                                            <td>28/08/2019</td>
                                        </tr>
                                        <tr>
                                            <td className='text-info'><a
                                                style={{ textDecoration: 'none' }} href='#'>
                                                java Developer<br></br>
                                                <small>Hyderabad,india</small></a></td>
                                            <td>Srinivas Rao Desai</td>
                                            <td>Harish</td>
                                            <td className='text-info'>10</td>
                                            <td className='text-info'>5</td>
                                            <td className='text-info'>0</td>
                                            <td>15</td>
                                            <td className='text-info'>2</td>
                                            <td>28/08/2019</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className='col-lg-4 col-sm-4 col-4 text-center'>
                            <div className='row'>
                                <div id='styles3' className='col-lg-6'>
                                    <div className='shadow p-2'>
                                        <h6 className='text-left'
                                            style={{ color: "lightslategrey" }}>
                                            Offer Acceptance
                                            </h6>
                                        <img src={image1} height='160px'
                                            className='p-2' alt='pie charts'
                                            width='140px' /><br></br>
                                        <span className='float-left'>
                                            <input id='accepted'
                                                className='mr-1 bg-danger'
                                                type='checkbox' />
                                            <label htmlFor='accepted'>Accepted</label>
                                        </span>
                                        <span className='text-right'>
                                            <input id='rejected'
                                                className='mr-1 bg-info'
                                                type='checkbox' />
                                            <label htmlFor='rejected'>rejected</label>
                                        </span>
                                    </div>
                                </div>
                                <div id='styles3' className='col-lg-6'>
                                    <div className='shadow p-4 text-left'>
                                        <h6 style={{ color: "lightslategrey" }}>New Joiners</h6>
                                        <h6 style={{ fontSize: '38px' }}>
                                            02
                                            <small
                                                style={{ color: "lightslategrey", fontSize: '15px', marginLeft: '15px' }}>
                                                Today
                                            </small>
                                        </h6>
                                        <h6 style={{ fontSize: '38px' }}>
                                            04
                                            <small
                                                style={{ color: "lightslategrey", fontSize: '15px', marginLeft: '15px' }}>
                                                This Week
                                            </small>
                                        </h6>
                                        <h6 style={{ fontSize: '38px' }}>
                                            07
                                            <small
                                                style={{ color: "lightslategrey", fontSize: '15px', marginLeft: '15px' }}>
                                                This Month
                                            </small>
                                        </h6>
                                    </div>
                                </div>
                            </div>
                            <div className='shadow mt-3'>
                                <div className='col-lg-12 p-3 text-left'>
                                    <div className='mb-3 '>
                                        <a style={{ textDecoration: 'none' }}
                                            href='#'> <b style={{ borderBottom: '3px solid' }}
                                                className='text-info mt=-3'>My Tasks</b></a>
                                        <a style={{ textDecoration: 'none' }}
                                            href='#' className='text-dark'>
                                            <b style={{ marginLeft: '100px' }}>My Approvals</b>
                                        </a>
                                    </div>
                                    <div>
                                        <b style={{ fontWeight: 'lighter' }}>Today 21 August 2018</b>
                                        <a style={{ textDecoration: 'none' }}
                                            href='#' className='float-right text-info'>View All</a>
                                    </div>
                                    <div className='text-left mt-4'>
                                        <a style={{ textDecoration: 'none' }}
                                            href='#'> <p className='text-info m-0'>Discuss with Recruitment Manager</p></a>
                                        <small style={{ fontWeight: 'lighter' }}>02:00 PM - 3:00 PM IST</small>
                                    </div>
                                    <div className='text-left mt-4'>
                                        <a style={{ textDecoration: 'none' }}
                                            href='#'> <p className='text-info m-0'>Discuss with Recruitment Manager</p></a>
                                        <small style={{ fontWeight: 'lighter' }}>02:00 PM - 3:00 PM IST</small>
                                    </div>
                                    <div className='text-left mt-4'>
                                        <a style={{ textDecoration: 'none' }}
                                            href='#'> <p className='text-info m-0'>Discuss with Recruitment Manager</p></a>
                                        <small style={{ fontWeight: 'lighter' }}>02:00 PM - 3:00 PM IST</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container-fluid mt-4'>
                    <div className='row'>
                        <div className='col-lg-4 shadow'>

                            <div className='row'>
                                <div className='col-lg-6'>
                                    <b style={{ fontWeight: '400' }}>Hire By Source</b>
                                </div>
                                <div className='col-lg-6'>
                                    <select style={{ borderRadius: '20px', outline: 'none' }}
                                        className='float-right'>
                                        <option>Last 30 Days</option>
                                    </select>
                                </div>
                            </div>
                            <div className='p-2'>
                                <div className='row'>
                                    <div className='col-lg-6 mt-3'>
                                        <div>
                                            <img src={pieChart} alt='pie charts' height='180px'
                                                width='250px' />
                                        </div>
                                    </div>
                                    <div className='col-lg-6'>
                                        <div>
                                            <div className='row p-2'>
                                                <div className='col-lg-3 text-center pr-0'>
                                                    <i className="fa fa-circle-o text-success"
                                                        aria-hidden="true"></i>
                                                </div>
                                                <div className='col-lg-5 p-0 text-left'>
                                                    <b className=''>Linkedin</b>
                                                </div>
                                                <div className='col-lg-4'>
                                                    <b style={{ fontWeight: 'lighter' }}>20</b>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className='row p-2'>
                                                <div className='col-lg-3 text-center pr-0'>
                                                    <i className="fa fa-circle-o" style={{ color: 'purple' }}
                                                        aria-hidden="true"></i>
                                                </div>
                                                <div className='col-lg-5 p-0 text-left'>
                                                    <b className=''>Linkedin</b>
                                                </div>
                                                <div className='col-lg-4'>
                                                    <b style={{ fontWeight: 'lighter' }}>03</b>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className='row p-2'>
                                                <div className='col-lg-3 text-center pr-0'>
                                                    <i className="fa fa-circle-o text-warning"
                                                        aria-hidden="true"></i>
                                                </div>
                                                <div className='col-lg-5 p-0 text-left'>
                                                    <b className=''>Linkedin</b>
                                                </div>
                                                <div className='col-lg-4'>
                                                    <b style={{ fontWeight: 'lighter' }}>15</b>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className='row p-2'>
                                                <div className='col-lg-3 text-center pr-0'>
                                                    <i className="fa fa-circle-o text-info"
                                                        aria-hidden="true"></i>
                                                </div>
                                                <div className='col-lg-5 p-0 text-left'>
                                                    <b className=''>Linkedin</b>
                                                </div>
                                                <div className='col-lg-4'>
                                                    <b style={{ fontWeight: 'lighter' }}>10</b>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4 pr-0'>
                            <div className='p-2 shadow'>
                                <div className='row'>
                                    <div className='col-lg-6'>
                                        <b style={{ fontWeight: '400' }}>Time To Hire</b>
                                    </div>
                                    <div className='col-lg-6'>
                                        <select style={{ borderRadius: '20px', outline: 'none' }}
                                            className='float-right'>
                                            <option>Last 30 Days</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='row mt-3'>
                                    <div className='col-lg-12 m-auto text-center'>
                                        <div>
                                            <img src={pyramid} alt='pie charts' height='180px'
                                                width='250px' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='p-3 h-100 shadow'>
                                <div className='row'>
                                    <div className='col-lg-6'>
                                        <b style={{ fontWeight: '400' }}>Activity Logs</b>
                                    </div>
                                    <div className='col-lg-6 text-right'>
                                        <a style={{ textDecoration: 'none' }} className=' text-info'
                                            href='#'>View All</a>
                                    </div>
                                </div>
                                <div style={{ borderBottom: '1px solid lightslategrey', marginTop: '15px' }}></div>
                                <div className='mt-2'>
                                    <b>Harish,</b><small
                                        style={{ fontWeight: 'lighter' }}
                                        className='ml-1'>Changed the srilatha candidate status from "Screeming" to "technical interviews"</small>
                                </div>
                                <div style={{ borderBottom: '1px solid lightslategrey', marginTop: '15px' }}></div>
                                <div className='mt-2'>
                                    <b>krishna,</b><small
                                        style={{ fontWeight: 'lighter' }}
                                        className='ml-1'>Changed the srilatha candidate status from "Screeming" to "technical interviews"</small>
                                </div>
                                <div style={{ borderBottom: '1px solid lightslategrey', marginTop: '15px' }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default App;