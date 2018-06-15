import React, { Component } from 'react';

import {combineReducers, createStore } from 'redux';

class MultipleReducers extends React.Component{
    render(){

        const userReducer = (state={}, action)=>{
            switch(action.type){
                case "CHANGE_NAME":{
                    state = {...state, name: action.payload}
                    break;
                }
                case "CHANGE_AGE":{
                    state = {...state, age: action.payload}
                    break;
                }
            }
            return state;

        }
        const tweetsReducer = (state=[], action)=>{
            return state;
        }
        const reducers = combineReducers({
            users:userReducer,
            tweets:tweetsReducer
        })

        const store = createStore(reducers);

        store.subscribe(()=>{
            console.log("Multiple Reducers are", store.getState());
        })

        store.dispatch({type:"CHANGE_NAME",payload: "Gonugunta"})
        store.dispatch({type:"CHANGE_AGE",payload: 27})

        return(
            <div>
            </div>
        );
    }
}
export default MultipleReducers;