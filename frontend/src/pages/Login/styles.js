import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    main: {
        marginTop: theme.spacing(8),
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: '8px',
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    loginCheck: {
        fontSize: '10px',
    },
    textField: {
        color: theme.palette.primary.dark,
    },
}));