import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper, Grid } from '@material-ui/core';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';


import useStyles from './styles';
import { createPost, updatePost } from '../../../actions/FinanceAction/posts';

const Form = ({ currentId, setCurrentId }) => {
    const [postData, setPostData] = useState({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
    const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null);
    const dispatch = useDispatch();
    const classes = useStyles();

    useEffect(() => {
        if (post) setPostData(post);
    }, [post])

    const handleSubmit = (e) => {
        e.preventDefault();

        if (currentId) {
            dispatch(updatePost(currentId, postData));
        } else {
            dispatch(createPost(postData));
        }

        clear();
    }

    const clear = () => {
        setCurrentId(null);
        setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
    }

    return (
        <Grid container spacing={3}>
            <Grid itme xs={6}>
                <Paper className={classes.paper}>
                    {/* <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">{ currentId ? 'Editing' : 'Creating'} a Memory </Typography>
                <TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} />
                <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
                <TextField name="message" variant="outlined" label="Message" fullWidth value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
                <TextField name="tags" variant="outlined" label="Tags" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })} />
                <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            </form> */}
                    <Grid container spacing={3}>
                        <Grid item xs={6}>
                            <Typography variant="h5"> Payer Details </Typography>
                        </Grid>
                        <Grid item xs={6}>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField name="firstName" variant="outlined" label="First Name" fullWidth />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField name="lastName" variant="outlined" label="Last Name" fullWidth />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField name="firstName" variant="outlined" label="First Name" fullWidth />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField name="lastName" variant="outlined" label="Last Name" fullWidth />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField name="email" variant="outlined" label="Email" fullWidth />
                        </Grid>
                        <Grid item xs={8}>  </Grid>
                        <Grid item xs={2}>
                            <Button className={classes.buttonSubmit} variant="contained" color="primary" size="small" type="submit" fullWidth>Submit</Button>
                        </Grid>
                        <Grid item xs={2}>
                            <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
            <Grid itme xs={6}></Grid>
        </Grid>
    );
}

export default Form;