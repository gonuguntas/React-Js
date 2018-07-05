import React from 'react'

function FullName() {
  const firstName = "John"
  const lastName = "Doe"
  return (
    <div>
      <p>Display full name</p>
      <p>Name:{firstName} {lastName} </p>
    </div>
  )
}


function FruitList() {
  const fruits = ["Apple", "Mango", "Grapes"]
  const item = function(fruit,index){
    return <li key={index}>{fruit}</li>
  }
  return (
    <div>
      <p>Display fruit list </p>
      <ul>
        {fruits.map(item)}
        </ul>
    </div>
  )
}

function Total() {
  const numbers = [10, 20, 30, 50]
  const total = numbers.reduce((a,b)=> {return a+b},0)
  return (
    <div>
      <p>Display sum of numbers in an array: {total}</p>
    </div>
  )
}

function JSXExercies() {
  return (
    <div>
      <FullName />
      <hr />
      <FruitList />
      <hr />
      <Total />
      <hr />
    </div>
  )
}

export default JSXExercies
