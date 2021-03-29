import {orange} from '@material-ui/core/colors';
import {createMuiTheme} from "@material-ui/core/styles";

const lightTheme = createMuiTheme({
    palette: {
        type: 'light',
        primary: orange
    },
});

const darkTheme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: orange
    },
});


export {lightTheme, darkTheme}
