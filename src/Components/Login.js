import React from "react"
import App from "../App"
import Button from '@material-ui/core/Button'
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography'
import SimpleCard from './Switch'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import NavBar from './Navbar'
import SelectBar from './Select'
import SelectCard from "./Select"
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import MySlider from './Slider'
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Dashboard from './Dashboard'

import '../Components/Login.css'
const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

class Login extends React.Component{
constructor(props){
  super(props)
  this.state={
    quality:'Normal'
  }
  const classes = useStyles();
  render()
   if(props.loggedIn){
     return(
       <div>

         <div className = {classes.root}>
           <NavBar></NavBar><br/>

           <Grid className = {classes.grid}container spacing={3}>
             <Grid  item xs>
            <MySlider></MySlider>
           </Grid>
           <Grid item xs>
             <SimpleCard></SimpleCard>
           </Grid>
           <Grid item xs>
           <Card className={classes.root}>
      <CardContent>
        <Typography variant ="h6" color="textSecondary" gutterBottom>
          Sound Quality
        </Typography>
        <Typography variant="h6" >
          Manually adjust the sound quality in case of poor quality connection.
        </Typography>
       
      </CardContent>
      <CardActions>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Quality</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={quality}
          onChange={handleChange}
        >
          <MenuItem value={"Normal"}>Normal</MenuItem>
          <MenuItem value={"Low"}>Low</MenuItem>
          <MenuItem value={"High"}>High</MenuItem>
        </Select>
      </FormControl>
      </CardActions>
    </Card>
           </Grid>
           <Card item xs>
            
          </Card>
           </Grid>
         </div>
         <Button onClick ={props.click}>Log Out</Button>

         
          

       </div>
       
     )
   }else{
     return (
       <App/>
     )
   }
}}