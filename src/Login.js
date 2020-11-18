import React, { Component } from 'react';
import Navigation from './Navigation.js';
import request from 'superagent';
import Header from './Header.js';
import Footer from './Footer.js';
import { NavLink } from 'react-router-dom';
import './SignLogin.css';


export default class Login extends Component {
    state = { 
        email: '',
        password: '',
        loading: false,
        err: null,
    }

// ----------------------------------------------------------------------------------------

    handleSubmit = async (e) => {
        e.preventDefault()
        this.setState({ loading:true })
        try{
        const user = await request
            .post('https://serene-temple-06405.herokuapp.com/auth/signin')
            .send(this.state);
        

            console.log(user.body,'Logging You In')
            this.setState({ loading: false })

            this.props.changerTN(user.body.email,
            user.body.token);
            this.props.history.push('/userProfile')
        }
        catch(err) {
            this.setState({ err: 'ERROR, Please enter a valid EMAIL'})
        } 

    }   

// ----------------------------------------------------------------------------------------

    render() {
        return (
            <div>
                <div>
                    <Navigation />
                </div>

    {/* ----------------------------------------------------------------------- */}

                <Header />

    {/* ----------------------------------------------------------------------- */}

                <div className="container">

                <NavLink className="signup" to="/signup">SignUp</NavLink> 
                <NavLink className="login" to="/login">Login</NavLink> 

                <div className="login-form">
                    <form onSubmit={this.handleSubmit}>
                        <h2>Login</h2>
                        Username or Email:
                        <label> 
                            {this.state.err && <div>
                                {this.state.err}
                                </div>}
                            <input
                            value={this.state.email}
                            onChange={(e) => this.setState({ email: e.target.value})}
                            />
                        </label>
                        Password
                        <label> 
                            <input
                            type="password"
                            value={this.state.password}
                            onChange={(e) => this.setState({ password: e.target.value})}
                            />
                        </label>

                        {
                            this.state.loading
                            ? 'spins'
                            : <button>Submit</button>
                        }
                    </form>
                </div>
            </div>

{/* -------------------------------------------------------------------------------------- */}

                    <Footer />

                </div>

        )
    }
}