import ReactDOM from 'react-dom';
import React, {useEffect, useState} from "react";
import {createStore} from "redux";
import {Provider, useSelector} from "react-redux";
import {useCookies} from "react-cookie";
import {CssBaseline, ThemeProvider} from '@material-ui/core'

import {darkTheme, lightTheme} from "./theme";

import Loading from "./App/Loading";


const useServiceWorker = false  // Turn on/off service worker


if (useServiceWorker) {
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
}

const Loadable = (LazyComponent, loadingComponent = null) => {
    return ({history, location, match}) => {
        const [content, setContent] = useState(loadingComponent)

        useEffect(() => {
            LazyComponent().then((m) => {
                // pass through the router props (history, location, match)
                setContent(<m.default history={history} location={location} match={match}/>)
            })
        }, [])
        return content
    }
}

// Create an App which renders the Loading component as long as the real
// app has been loaded completely. Upon completion the Loading component
// is automatically replaced by the imported app component and re-renders
const App = Loadable(() => import('./App/App'), <Loading/>)

// This component uses the MaterialUI ThemeProvider ot wrap your imported
// app with the MaterialUI theme that is present in the Redux store.
const ThemedApp = () => {
    const theme = useSelector(state => state.theme)

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <App/>
        </ThemeProvider>
    )
}

// This component wraps the themed app in a Redux provider, so that a global
// Redux store will be available from everywhere in your app.
const ReduxApp = () => {
    const [cookies, setCookie, removeCookie] = useCookies(['theme'])
    const initialState = {theme: cookies.theme === 'light' ? lightTheme : darkTheme}

    const store = createStore((state = initialState, action) => {
        let newState = state
        if (action.type === 'CHANGE_THEME') {
            newState.theme = newState.theme === darkTheme ? lightTheme : darkTheme
            setCookie('theme', newState.theme.palette.type)
        }
        return newState
    })

    return (
        <Provider store={store}>
            <ThemedApp/>
        </Provider>
    )
}


ReactDOM.render(<ReduxApp/>, document.getElementById('root'));
