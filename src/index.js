import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.css';
import HeaderPage from './components/pagecomponents/HeaderPage';

ReactDOM.render(
    <>
        <HeaderPage/>
        <App/>
   </>,
    document.getElementById('root')
);