import React, { useState, useEffect} from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { getPosts } from '../../actions/FinanceAction/posts';
import Form from '../../components/FinaceComponent/Form/Form';
import Posts from '../../components/FinaceComponent/Posts/Posts';
import Table from '../../components/FinaceComponent/table';
// import testimage from './images/icon.jpg';
import useStyles from './styles';

const Home = () => {
    const [currentId, setCurrentId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]);

    return (
        <div>
            <div class="page-wrapper">
                <div class="content container-fluid">
                    <Container maxWidth="lg">
                        <AppBar className={classes.appBar} position="static" color="inherit">
                            <Typography className={classes.heading} variant="h2" align="center">Memories</Typography>
                            {/* <img className={classes.image} src={testimage} alt="memories" height="60" /> */}
                        </AppBar>
                        <Grow in>
                            <Container>
                                <Grid container justify="space-between" alignItems="strech" spacing="3">
                                    <Grid item xs={12} sm={7}>
                                        <Posts setCurrentId={setCurrentId} />
                                    </Grid>
                                    <Grid item xs={12} sm={4}>
                                        <Form currentId={currentId} setCurrentId={setCurrentId} />
                                    </Grid>
                                    <Grid item xs={12} sm={12}>
                                        <Table />
                                    </Grid>
                                </Grid>
                            </Container>
                        </Grow>
                    </Container>
                </div>
            </div>
        </div>

    );
}

export default Home;