import { makeStyles, useTheme } from "@material-ui/core/styles";

export const drawerWidth = 240;
export const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.primary.main,
    },
    appBar: {
        backgroundColor: theme.palette.primary.dark,
    },
    toolbar: {
        paddingRight: 24,
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
    },
    menuButton: {
        color: theme.palette.primary.text,
        marginRight: 36,
    },
    title: {
        color: theme.palette.primary.text,
        flexGrow: 1,
    },
}));