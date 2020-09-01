import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    avatarWrap: {
    },
    avatar: {
        float: 'left',
    },
    smallAvatar: {
        width: theme.spacing(3),
        height: theme.spacing(3),
    },
    largeAvatar: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
    nickName: {
        float: 'left',
        padding: `${theme.spacing(1)}px 0`,
        marginLeft: '8px',
    },
    smallNickName: {
        padding: `${theme.spacing(0.15)}px 0`,
    },
    largeNickName: {
        padding: `${theme.spacing(2)}px 0`,
    },
}));