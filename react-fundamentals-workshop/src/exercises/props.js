import React from 'react'



function FullName(props) {
  return <div>{props.firstName} {props.lastName}</div>
}

function FruitList(props) {
  return <div><ul>{props.fruits.map((fruit,i)=><li key="i">{fruit}</li>)}</ul></div>
}

function Button(props) {
  return <button style={{backgroundColor: props.type === 'success' ? 'green': 'red' }}>{props.children}</button>
}

function PropExamples() {
  return (
    <div>
      <p>Display full name</p>
      <FullName firstName="John" lastName="Doe" />
      <hr />
      <p>Display fruit list</p>
      <FruitList fruits={["Apple", "Mango", "Grapes"]} />
      <hr />
      <p>Implement button that shows different background based on type props</p>
      <p>Green background for type = success</p>
      <Button type='success'>Success button</Button>
      <p>Red background for type = error</p>
      <Button type='error'>Error button</Button>
      <hr />
    </div>
  )
}

export default PropExamples
