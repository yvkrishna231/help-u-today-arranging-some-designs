import React, { Component, Fragment } from 'react';
import Shield from './shield.jpg';
import '../App.css';

class App extends Component {
    state = {
        input: '',
    }
    handleOnSubmit = (e) => {
        e.preventDefault();

    }
    handleOnChange = (e) => {
        this.setState({ input: e.target.value })
    }
    render() {
        return (
            <Fragment>
                <div className='container mt-5'>
                    <div className='row'>
                        <div className='col-lg-6 col-sm-8 col-md-10 col-12 rounded-lg m-auto text-center shadow bg-light'>
                            <div className='mt-5'>
                                <img id='image' src={Shield} alt='Shield image' />
                                <h1 id='h1tag'>Help U Today</h1>
                                <p>Remember everything is important.</p>
                                <a href='https://accounts.google.com/ServiceLogin/signinchooser?elo=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin'>
                                    <button id='googlebutton'>
                                        <i id='itag' className='fa fa-google text-danger mr-1'></i>
                                        <small id='googlesmalltag'>Continue with google</small>
                                    </button>
                                </a>

                                <div className='col-lg-8 col-sm-12 col-md-8 col-10 m-auto'>
                                    <p id='lineptag'><span id='linespantag'>Or</span></p>
                                </div>
                                <div className='row'>
                                    <div className='col-lg-7 col-sm-12 col-md-6 col-10  m-auto'>
                                        <form onSubmit={this.handleOnSubmit}>
                                            <input
                                                id='inputfield1'
                                                className='form-control'
                                                onChange={this.handleOnChange}
                                                value={this.state.input}
                                                placeholder='Email address or username' />
                                            {this.state.input && <input
                                                id='inputfield2'
                                                className='form-control mt-2'
                                                placeholder='Password' />}
                                            <button
                                                id='inputbutton'
                                                className='form-control btn btn-sm btn-success'>
                                                Continue
                                                </button>
                                        </form>
                                        <input
                                            className='checkboxinput'
                                            type='checkbox'
                                            id='checkBox'
                                        />
                                        <label
                                            htmlFor='checkBox'
                                            className='checkboxsmalltag'>
                                            Remember me for 30 days
                                                </label><br></br>
                                        {this.state.input && <a href='#'><small className='text-success'>Forgot Password?</small></a>}
                                    </div>
                                </div>
                                <div id='createaccountdivtag'>
                                    <small
                                        id='createaccountsmalltag'
                                        className='mt-5'>Don't have an account?
                                    </small><br></br>
                                    <a href='#' className='text-success'>
                                        <small>Create account</small></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container mt-5'>
                    <div className='row'>
                        <div className='col-lg-6 text-center m-auto p-0'>
                            <a href='#' id='lastterm'><small id='bottomsmalltag'>Terms Of Services</small></a>
                            <a href='#' id='lastterm1'><small id='bottomsmalltag1'>Privacy Policy</small></a>
                            <a id='lastterm2'><small id='bottomsmalltag2'>Copyright 2019 help-u-today Corporation. All rights reserved.</small></a>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default App;