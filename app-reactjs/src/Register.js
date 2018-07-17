import React, { Component } from 'react';


export default class Register extends Component {
    render(){
        return (
            <div>
            <h2>Register Id is : {this.props.match.params.id}</h2>
            <h2>Name  is : {this.props.match.params.name}</h2>
            </div>
        )
    }

} 