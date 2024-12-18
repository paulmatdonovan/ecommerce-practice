import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(() => ({
    root: {
        maxWidth: '100%'
    },
    media: {
        paddingTop: '56.25%',
        height: 0,
    },
    cardActions: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    cardContent: {
        display: 'flex',
        justifyContent: 'space-between',
    },

}));

