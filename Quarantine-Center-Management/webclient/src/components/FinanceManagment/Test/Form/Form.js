import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import {Row, Col, Form} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';

import useStyles from './styles';
import { createPost, updatePost } from '../../../../actions/Test/posts';

const Formtest = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
  const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch();
  const classes = useStyles();

  const [validated, setValidated] = useState(false);

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const clear = () => {
    setCurrentId(0);
    setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createPost(postData));
      clear();
    } else {
      dispatch(updatePost(currentId, postData));
      clear();
    }

    setValidated(true); 
  };

  return (
    // <Paper className={classes.paper}>
    //   <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
    //     <Typography variant="h6">{currentId ? `Editing "${post.title}"` : 'Creating a Memory'}</Typography>
    //     <TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} />
    //     <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
    //     <TextField name="message" variant="outlined" label="Message" fullWidth multiline rows={4} value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
    //     <TextField name="tags" variant="outlined" label="Tags (coma separated)" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })} />
    //     <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div>
    //     <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
    //     <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
    //   </form>
    // </Paper>

    <div>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustom01">
            <Form.Label>First name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="First name"
              name="creator"
              value={postData.creator}
              onChange={(event) => setPostData({ ...postData, creator: event.target.value })}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationCustom02">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Last name"
              name="title"
              value={postData.title}
              onChange={(event) => setPostData({ ...postData, title: event.target.value })}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="12" className='mt-3' controlId="validationCustom01">
            <Form.Label>Permenent Address</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="First name"
              name="message"
              value={postData.message}
              onChange={(event) => setPostData({ ...postData, message: event.target.value })}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>  
        </Row>
        <Row className='mt-5'>
          <Col sm={6} md={6}>
          </Col>
          <Col sm={2} md={2}>
            <button type="button" class="btn btn-block btn-warning" onClick={clear}>Cancel</button>
          </Col>
          <Col sm={2} md={2}>
            <button type="button" class="btn btn-block btn-danger">Cancel</button>
          </Col>
          <Col sm={2} md={2}>
            <button type="submit" class="btn btn-block btn-info">Save & Next</button>
          </Col>
        </Row>

      </Form>
    </div>
  );
};

export default Formtest;
