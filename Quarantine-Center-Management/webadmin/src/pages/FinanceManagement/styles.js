import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
    appBar: {
        borderRadius: 10,
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'black', 
    },
    heading: {
        color: 'white',
    },
    image: {
        marginLeft: '15px',
    },
    test: {
        margin: '50px 0',
    },
}));