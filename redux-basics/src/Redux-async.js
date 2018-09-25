import React, { Component } from 'react';

import { applyMiddleware, createStore } from 'redux';
import axios from 'axios';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

class Reduxasync extends React.Component{
    render(){

        const initialState = {
            fetching : false,
            fetched : false,
            users :[],
            err : null
        }

        const reducer = function(state=initialState, action){
            switch(action.type){
                case "FETCH_USERS_PENDING":{
                    return {...state, fetching: true}
                    break;
                }
                case "FETCH_USERS_REJECTED":{
                    return {...state, fetching: false, err:action.payload}
                    break;
                }
                case "FETCH_USERS_FULLFILLD":{
                    return {...state, fetching:false,fetched: true, users:action.payload}
                    break;
                }
            }
            return state;
        }

        const middleware = applyMiddleware(promise(), thunk, createLogger())
        const store = createStore(reducer, middleware);



        store.dispatch({
            type:"FOO",
            payload: axios.get("http://localhost:4000/users")
        })
        

        return(
            <div>
            </div>
        );
    }
}
export default Reduxasync;