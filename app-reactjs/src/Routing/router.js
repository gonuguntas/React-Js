
import React from 'react';
import { BrowserRouter as Router, Route, Link, NavLink, Redirect, Prompt } from 'react-router-dom';


const Logout = ()=>{
    return (<h3>Logged out</h3>)
}
const Login = ()=>{
    return (<div>
        <h1>Sign In</h1>
        <label for="email"><b>Email</b></label>
        <input type="text" placeholder="Enter Email" name="email" required />
        <label for="psw"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="psw" required />
        <button type="submit" class="registerbtn">Sign In</button>
     </div>
    )

}
export default class RouterDemo extends React.Component {
        state = {
            loggedIn: false
        }

        loginHandle = ()=>{
            this.setState({loggedIn: true});
        }

    render(){
        return (
            <Router>
            <div>    
            <ul>
                <li><NavLink to="/routing/logout" activeStyle={{color:'green'}}>Logout</NavLink></li>
                <li><NavLink to="/routing/login" activeStyle={{color:'green'}}>Login</NavLink></li>
            </ul>

            <Prompt when={this.state.loggedIn} message="Are you sure" />

            <input type="button" value= {this.state.loggedIn ? 'Logout' : 'Login'} onClick={this.loginHandle.bind(this)} />
            <p>You can go to Login after click on Login button only...</p>
            <hr />

                <Route exact path="/routing/logout" component={Logout} />
                <Route exact path="/routing/login" render={
                    ()=>(
                        this.state.loggedIn ? (<Login />) : (<Redirect to='/routing/logout' />)
                    )
                } />

            </div>
            </Router>
           
        )
    }

} 