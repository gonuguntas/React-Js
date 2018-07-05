import React from 'react';


export default class Child extends React.Component{

render(){
    return (
        <div> 
            <button onClick={this.props.updateparent}>UpdateParent</button>  
        </div>
    )
}

}