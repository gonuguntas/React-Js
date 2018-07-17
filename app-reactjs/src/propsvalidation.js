import React from 'react';
import PropTypes from 'prop-types';

class Propsvalidation extends React.Component{
    render(){
        return(
            <div>
            <p>Please check in console for errors.</p>
            <h1> Hello, {this.props.name} </h1>
            <h3>Array: {this.props.propArray}</h3>			
            <h3>Bool: {this.props.propBool ? "True..." : "False..."}</h3>
            <h3>Func: {this.props.propFunc(3)}</h3>
            <h3>Number: {this.props.propNumber}</h3>
            <h3>String: {this.props.propString}</h3>
         </div>

        )
    }
}

Propsvalidation.propTypes = {
    name : PropTypes.string,
    propArray: PropTypes.array.isRequired,
    propBool: PropTypes.bool.isRequired,
    propFunc: PropTypes.func,
    propNumber: PropTypes.number,
    propString: PropTypes.string
};

Propsvalidation.defaultProps = {
    name: "Nageswara Rao",
    propArray:[1,2,3,4,5],
    propBool: true,
    propFunc: function(e){
        return e
    },
    propNumber: 1,
    propString: "String value...."

}

export default Propsvalidation;