import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import RouterDemo from './RouterDemo';

import { Provider } from 'react-redux';
import store from "./redux/store/index";


ReactDOM.render(
    <Provider store={store}>
    <RouterDemo />
    </Provider>, document.getElementById('root'));