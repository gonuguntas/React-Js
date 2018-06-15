import React, { Component } from 'react';

import { createStore } from 'redux';

class ReduxBasic extends React.Component{
    render(){

        const reducer = function(state, action){
            if(action.type === "INCRE"){
                return state + 1;
            }
            if(action.type === "DECRE"){
                return state - 1;
            }
            if(action.type === "NAME"){
                return action.payload;
            }
            if(action.type === "ADD"){
                return state + action.payload;
            }if(action.type === "SUB"){
                return state - action.sub;
            }
            return state;
        }

        const store = createStore(reducer, 0);

        store.subscribe(()=>{
            console.log("Store is now", store.getState());
        })

        store.dispatch({type:"INCRE",payload: 1})
        store.dispatch({type:"DECRE",payload: 1})
        store.dispatch({type:"ADD",payload: 100})
        store.dispatch({type:"SUB",sub: 100})
        store.dispatch({type:"NAME",payload: "Nag"})

        return(
            <div>
                Check in console
            </div>
        );
    }
}
export default ReduxBasic;