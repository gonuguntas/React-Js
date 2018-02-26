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

            </div>
            </Router>
           
        )
    }

} 