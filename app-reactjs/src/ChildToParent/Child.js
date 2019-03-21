import React from 'react';


export default class Child extends React.Component{

render(){
    return (
        <div> 
            <button onClick={this.props.updateparent}>{this.props.updateText}</button>  
        </div>
    )
}

}