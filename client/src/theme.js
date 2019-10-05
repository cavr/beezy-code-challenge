import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#000000'
        },
        secondary: {
            main: '#FF0000',
        },
        error: {
            main: red.A400,
        },
        background: {
            default: '#b5a0a042',
        },
    },
});

export default theme;