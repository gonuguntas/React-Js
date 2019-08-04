import React from 'react';
import { connect } from 'react-redux';
import './index.css';


function Form(props) {
  const { mydata } = props;
  const mydata1 = mydata.mydata;
  return (
    <div>
      {mydata1 ? Object.values(mydata1).map((header, index) => <Header {...header} key={index} >
      </Header>) : null}
    </div>
  );
}


const Header = (props) => {
  const { title, sections } = props
  //console.log(props)
  return (
    <div>
      {title}
      {sections ? Object.values(sections).map((sectionObj, index) => <Formcontent {...sectionObj} key={index} />) : null}
    </div>
  )
}

const Formcontent = (props) => {
  const { title, formData } = props
  // console.log(props)
  return (
    <div className="sectionTitle">
      {title}
      {formData ? Object.values(formData).map((rows, index) => <Row rows={rows} key={index} />) : null}
    </div>
  )
}

const Row = (props) => {
  const { rows } = props
  //console.log(props)
  return (
    <div>
      {rows ? Object.values(rows).map((rowcontent, index) => <Rowcontent  {...rowcontent} key={index} />) : null}
    </div>
  )
}


const Rowcontent = (props) => {
  const { label } = props
  //console.log(props)
  return (
    <div>
      {label ? <Controller {...props} /> : null}
    </div>
  )
}

const Controller = (props) => {
  const { label, type, info, options } = props;
  //console.log(props)
  let Component = null;
  switch (type) {
    case "text":
      Component = <Text type={type} />
      break;
    case "info":
      Component = <Info type={type} info={info} />
      break;
    case "radio":
      Component = <Radio type={type} options={options} />
      break;
    default:
      Component = <Text type={type} />
  }
  return (
    <div className="formdata">
      {label ? <Label label={label} /> : null}
      {Component}
    </div>
  )
}


const Label = (props) => {
  const { label } = props;
  //console.log(props)
  return (
    <div>
      {label ? <h6> {label} </h6> : null}
    </div>
  )
}



const Text = (props) => {
  const { type } = props;
  //console.log(props);
  return (
    <div>
      <input type={type} />
    </div>
  )
}


const Radio = (props) => {
  const { type, options } = props;
  //console.log(props)
  return (
    <div>
      {options.map((option, index) => <div key={index}><input type={type} /> <span>{option}</span> </div>)}

    </div>
  )
}

const Info = (props) => {
  const { type, info } = props;
  //console.log(props)
  return (
    <div>
      {type ? <div> {info} </div> : null}
    </div>
  )
}



function mapStateToProps(state) {
  return {
    mydata: state.dynamicformReducer
  };
}
const Connected = connect(mapStateToProps, null)(Form);

export default Connected;