import React from 'react';

import axios from 'axios';


export default class Products extends React.Component {

        constructor(props){
            super(props);
            this.state={
                products:[]
            }
            {/* Here also we can write axios.get */}

        }
componentDidMount(){

                axios.get("http://localhost:5000/products")
            .then(res => {
               this.setState({
                   products:res.data
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
            <h2>Products Component using AXIOS Library</h2>
            <span> No of Products {this.state.products.length}</span>
            <br/><br/><br/>    { /* API Call using AXIOS library        products.json in API folder   json file must run in json-server
                    json-server --watch -p 4000 products.json  -----  */}
            <table>
                <thead>
                    <th>Index</th><th>Id</th><th>Picture</th><th>Price</th><th>Model</th><th>Description</th>
                </thead>   
                <tbody>
                    {this.state.products.map(function(p, index){
                        return(
                            <tr>
                                <td>{p.index + 1}</td>
                                <td>{p._id}</td>
                                <td><img src={p.picture} /></td>
                                <td>{p.Price}</td>
                                <td>{p.Model}</td>
                                <td>{p.Description}</td>
                                <td></td>
                            </tr>    
                        );
                    })}
                </tbody>     
            </table>    
            </div>
        )
    }

} 