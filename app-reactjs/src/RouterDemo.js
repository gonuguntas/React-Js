import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Users from './Users';
import Products from './Products';
import Register from './Register';
import Parent from './ChildToParent/Parent';
import Propsvalidation from './propsvalidation';
import Reference from './Ref';
import Key from './key';
import Lifecycle from './lifecycle-component';
import Crud from './crud';
import Signup from './Registration/signup';
import Signin from './Registration/signin';
import Purecomp from './purecomponent';
import Routing from './Routing/router';
import Sendtoparent from './sendtoparent';
import Validation from './validation';


export default class RouterDemo extends Component {
    render(){
        return (
            <Router>
            <div>    
            <ul>
                    <li><Link to="/">Get-Users</Link></li>
                    <li><Link to="/products">Get-Products</Link></li>
                    <li><Link to="/register/3/Nag">Register</Link></li>
                    <li><Link to="/childtoparent">Child To Parent</Link></li>
                    <li><Link to="/propsvalidation">Props Validation</Link></li>
                    <li><Link to="/Reference">Ref in React</Link></li>
                    <li><Link to="/Key">Key in React</Link></li>
                    <li><Link to="/Lifecycle">Component Lifecycle</Link></li>
                    <li><Link to="/crud">Crud Operation</Link></li>
                    <li><Link to="/signup">SignUp</Link></li>
                    <li><Link to="/signin">SignIn</Link></li>
                    <li><Link to="/purecomp">Pure Component</Link></li>
                    <li><Link to="/routing">Routing</Link></li>
                    <li><Link to="/sendtoparent">Send To Parent</Link></li>
                    <li><Link to="/validation">Validation</Link></li>

            </ul>
            <hr />
                <Route exact path="/" component={ Users } />
                <Route exact path="/products" component={ Products } />
                <Route exact path="/register/:id/:name" component={ Register } />
                <Route exact path="/childtoparent" component={ Parent } />
                <Route exact path="/propsvalidation" component={ Propsvalidation } />
                <Route exact path="/Reference" component={ Reference } />
                <Route exact path="/Key" component={ Key } />
                <Route exact path="/Lifecycle" component={ Lifecycle } />
                <Route exact path="/crud" component={ Crud } />
                <Route exact path="/signup" component={ Signup } />
                <Route exact path="/signin" component={ Signin } />
                <Route exact path="/purecomp" component={ Purecomp } />
                <Route exact path="/routing" component={ Routing } />
                <Route exact path="/sendtoparent" component={ Sendtoparent } />
                <Route exact path="/validation" component={ Validation } />

            </div>
            </Router>
           
        )
    }

} 