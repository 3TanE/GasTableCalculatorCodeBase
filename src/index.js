import ReactDOM from 'react-dom';
import React from 'react';

import './index.sass'

import App from "./App";

if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
        navigator.serviceWorker.register('/serviceworker.js').then(function (registration) {
            // Registration was successful
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }, function (err) {
            // registration failed :(
            console.log('ServiceWorker registration failed: ', err);
        });
    });
}


ReactDOM.render(<App/>, document.getElementById('root'));
