import React, {useEffect, useState} from "react";
import {CircularProgress, makeStyles} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    page: {
        height: '100vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    loading: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    dots: {
        display: 'inline',
        color: theme.palette.primary.light
    }
}));

const LoadingTitle = () => {
    const [counter, changeCounter] = useState(0);
    const classes = useStyles()

    useEffect(() => {
        const interval = setInterval(() => {
            changeCounter(counter + 1);
        }, 300);

        return () => clearInterval(interval)
    }, [counter]);

    const renderDots = () => {
        switch (counter % 3) {
            case 0:
                return '.\u00A0\u00A0'
            case 1:
                return '..\u00A0'
            case 2:
                return '...'
        }
    }

    return (
        <div style={{marginTop: '1rem'}}>
            <h1 style={{display: 'inline'}}>Loading</h1><h1 className={classes.dots}>{renderDots()}</h1>
        </div>
    )
}

export default () => {
    const classes = useStyles()

    return (
        <div className={classes.page}>
            <div className={classes.loading}>
                <CircularProgress/>
                <LoadingTitle/>
                Your app will be ready soon...
            </div>
        </div>
    )
}
