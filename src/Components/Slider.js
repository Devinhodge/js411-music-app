
import React from 'react'
import Typography from '@material-ui/core/Typography'
import Slider from '@material-ui/core/Slider'
import "../Components/Login.css"
import Button from '@material-ui/core/Button'


class VolSlider extends React.Component{
   constructor(props){
     super(props)
     this.state ={
       default : 50,
       volume : 20,
       message : ''
     }
   }

   hearingMessage =(event, newValue) => {
    if(this.state.volume >= 70){
       this.setState({message : "High Music Levels Can Effect Hearing"})
    } 
    this.setState({
      volume : newValue
    })
  };

  delete = ()=>{
    this.setState({
      message : ""
    })
  }

   render(){
     if(this.state.message === ""){
       return(
        <div>
          <Typography> Music Level</Typography>
           <Slider  onChange ={this.hearingMessage}
             width = "70%" 
             defaultValue={this.state.default}
             aria-labelledby="continuous-slider"
             valueLabelDisplay="auto"
             step={10}
             marks
           />
       </div>
       )
     } else{
      return(
       
        <div>
        <Typography> Music Level</Typography>
         <Slider onChange ={this.hearingMessage}
         width = "80%" 
         defaultValue={this.state.default}
         aria-labelledby="continuous-slider"
         valueLabelDisplay="auto"
         step={10}
         marks
         />
         <h3>{this.state.message}</h3>
         <Button onClick = {this.delete}>Ok</Button>
       </div>
     
   )
     }
     
   }
}

export default VolSlider