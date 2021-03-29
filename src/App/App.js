import {BrowserRouter, Route, Switch} from "react-router-dom";
import React from "react";
import {useDispatch} from "react-redux";
import {Button, makeStyles} from '@material-ui/core'
import {InvertColorsOffOutlined} from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
    page: {
        padding: '2rem 2rem 0',
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    title: {
        textAlign: 'center'
    }
}));

const NotFound = () => {
    const classes = useStyles()

    return (
        <div className={classes.title}>
            <h1>Not Found</h1>
            We could not find any matching content for this URL...
        </div>
    )
}


// This component will be your main app
export default () => {
    const d = useDispatch()
    const classes = useStyles()

    return (
        <div className={classes.page}>
            <Button
                variant="outlined"
                color="primary"
                onClick={() => d({type: 'CHANGE_THEME'})}
                startIcon={<InvertColorsOffOutlined/>}
            >
                Toggle mode
            </Button>

            <BrowserRouter>
                <Switch>
                    <Route component={NotFound}/>
                </Switch>
            </BrowserRouter>
        </div>
    )
}
