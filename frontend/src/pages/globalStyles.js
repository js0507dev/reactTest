import { makeStyles } from "@material-ui/core/styles";
import { fade } from '@material-ui/core/styles/colorManipulator';

export const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    headerSpacer: {
        backgroundColor: theme.palette.primary.dark,
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
}));