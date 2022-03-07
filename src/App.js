
import './App.css';
import React , {useEffect} from 'react';
import {Container,AppBar,Typography,Grow,Grid} from '@material-ui/core';
import Form from './components/Form/Form.js';
import experiences from './images/experiences.jpg'
import Posts from './components/Posts/Posts';
import useStyles from './styles';
import { useDispatch } from 'react-redux';
import {getPosts} from './actions/posts'

const App = ()=> {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(()=>{
dispatch(getPosts(dispatch))
  },[ dispatch])
  return (

 <Container fixed maxwidth="lg">
<AppBar className={classes.AppBar} position='static' color='inherit'>
<Typography className={classes.heading} variant='h2' align='center'> experiences </Typography>
{/* <img className={classes.image} src={experiences} alt="experiences" height="60"/> */}
</AppBar>
<Grow in>
  <Container> 
    <Grid container justifyContent="space-between" alignItems='stretch' spacing={3}>
      <Grid item xs={12} sm={7}>
        <Posts/>
      </Grid>
      <Form/>
      <Grid item xs={12} sm={4}></Grid>
    </Grid>
  </Container>
</Grow>
 </Container>

  );
}

export default App;
