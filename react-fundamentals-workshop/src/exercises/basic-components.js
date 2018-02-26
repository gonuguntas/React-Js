import React from 'react'

function hello(){
  alert("welcome to react");
}

function Button(){
  return (
    <input type="button" value="Click" 
      style={{backgroundColor:'blue',color:'white'}}
       onClick={hello} />

  )
}

class Button2 extends React.Component{
  showSlert(){
    alert("Hello");
  }
  render(){
    return     <input type="button" value="Click" 
      style={{backgroundColor:'blue',color:'white'}}
      onClick={this.showSlert} />

  }
}

function BasicComponents() {
  return (
    <div>
      <p>Implement a basic button with blue background and white text</p>
      <Button />
      <hr/>
      <p>Implement a button component with class syntax. Clicking on the button should show an alert with some text</p>
      <Button2 />
      <hr />
    </div>
  )
}

export default BasicComponents
