import React, { Component } from 'react';



export default class Users extends Component {
    constructor(props){
        super(props);
            this.state={
                names:[]
            }
    }

    componentDidMount(){
        fetch("http://localhost:4000/users")
        .then(res => res.json())
        .then(res => {
           this.setState({
               names:res
           })
            console.log(res);
        })
        .catch(err => {
            console.log(err)
        })
    }

    render(){
        return (
            <div>
            <h2>Users Component using fetch method</h2>
            <span>No of Users</span> {this.state.names.length}

            { /* API Call using Fetch        names.json in API folder  json file must run in json-server*/}

                <ul>
                    {this.state.names.map( name => <li>{name}</li>)}
                </ul>
            </div>
        )
    }

} 