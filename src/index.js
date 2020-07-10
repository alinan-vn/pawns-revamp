import React from 'react';
import ReactDOM from 'react-dom';
import rootReducer from './Reducers/rootReducer'
// import PawnsLogo from './Images/pawnsOutline.png'

import { Provider } from 'react-redux'
import { createStore } from 'redux'

import App from './App';
import Nav from './Components/global/nav/index';
import Footer from './Components/global/footer/index';


const store = createStore(
    rootReducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
    <Provider store={ store }>
        <Nav />
        <App />
        <Footer />
    </Provider>
    , 
    document.getElementById('root')
);

