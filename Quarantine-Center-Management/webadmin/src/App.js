import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { getPosts } from './actions/posts';
import { BrowserRouter as Router, Route } from "react-router-dom";

//common components
import Header from "./components/common/header";
import Sidebar from "./components/common/sidebar";

//PAGES
import Dashboard from "./pages/FinanceManagement/dashboard";
import Inquary from "./pages/FinanceManagement/finceinquary";


function App() {

  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Router>
      <div className="App">
        <Header />
        <Sidebar />
        <Route path="/dashboard" exact component={Dashboard} /> 
        <Route path="/inquary" exact component={Inquary} /> 
        {/* <Route path="/inquary" exact component={Dashboard} />  */}
      </div>
    </Router>
  );
}

export default App;


// import React, { useState, useEffect } from 'react';
// import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
// import { useDispatch } from 'react-redux';

// import Posts from './components/Posts/Posts';
// import Form from './components/Form/Form';
// import { getPosts } from './actions/posts';
// import useStyles from './styles';
// // import memories from './images/memories.png';

// const App = () => {
//   const [currentId, setCurrentId] = useState(0);
//   const dispatch = useDispatch();
//   const classes = useStyles();

//   useEffect(() => {
//     dispatch(getPosts());
//   }, [currentId, dispatch]);

//   return (
//     <Container maxWidth="lg">
//       <AppBar className={classes.appBar} position="static" color="inherit">
//         <Typography className={classes.heading} variant="h2" align="center">Memories</Typography>
//         {/* <img className={classes.image} src={memories} alt="icon" height="60" /> */}
//       </AppBar>
//       <Grow in>
//         <Container>
//           <Grid container justify="space-between" alignItems="stretch" spacing={3}>
//             <Grid item xs={12} sm={7}>
//               <Posts setCurrentId={setCurrentId} />
//             </Grid>
//             <Grid item xs={12} sm={4}>
//               <Form currentId={currentId} setCurrentId={setCurrentId} />
//             </Grid>
//           </Grid>
//         </Container>
//       </Grow>
//     </Container>
//   );
// };

// export default App;

