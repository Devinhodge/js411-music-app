
import React from "react"
import App from "../App"
import Button from '@material-ui/core/Button'
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid';
import NavBar from './Navbar'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Alerts from './Alerts'
import Slider from '@material-ui/core/Slider'
import Switch from '@material-ui/core/Switch'

class Dashboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoggedIn: false,
      user: '',
      quality: 'Normal',
      isConnected: true,
      default: 50,
      volume: 20,
      checkedA: true
    }
    this.handleChangeQuality = this.handleChangeQuality.bind(this);
  }
  handleChangeQuality = (event) => {
    this.setState({ quality: event.target.value });
  };
  adjustVolume = (event, newValue) => {
    this.setState({ volume: newValue })
  };
  handleSwitch = (event) => {
    this.setState({ checkedA: !this.state.checkedA })
    console.log(this.state.checkedA)
  }
  render() {
    if (this.props.loggedIn) {
      return (
        <div>
          <div className >
            <NavBar></NavBar><br />
            <Grid container spacing={3}>
              <Grid item xs>
                <Card >
                  <CardContent>
                    <Typography variant="h6" color="textSecondary" gutterBottom>
                      Connection
        </Typography>
                    <Typography variant="h6" >
                      Is this application connected to the internet?
        </Typography>

                  </CardContent>
                  <CardActions>
                    <Switch
                      checked={this.state.checkedA}
                      onChange={this.handleSwitch}
                      name="checkedA"
                      inputProps={{ 'aria-label': 'secondary checkbox' }}
                    />

                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs>
                <Card >
                  <CardContent>
                    <Typography variant="h6" color="textSecondary" gutterBottom>
                      Music Volume
              </Typography>
                    <Typography variant="h6" >
                      Adjust Volume Below
              </Typography>

                  </CardContent>
                  <CardActions>
                    <Slider onChange={this.adjustVolume}
                      width="80%"
                      defaultValue={this.state.default}
                      value={this.state.volume}
                      aria-labelledby="continuous-slider"
                      valueLabelDisplay="auto"
                      step={10}
                      marks
                    />
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs>
                <Card >
                  <CardContent>
                    <Typography variant="h6" color="textSecondary" gutterBottom>
                      Sound Quality
              </Typography>
                    <Typography variant="h6" >
                      Manually adjust the sound quality in case of poor quality connection.
              </Typography>

                  </CardContent>
                  <CardActions>
                    <FormControl >
                      <InputLabel id="demo-simple-select-label">Quality</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"

                        value={this.state.quality}
                        onChange={this.handleChangeQuality}
                      >
                        <MenuItem value={"High"}>High</MenuItem>
                        <MenuItem value={"Normal"}>Normal</MenuItem>
                        <MenuItem value={"Low"}>Low</MenuItem>
                      </Select>
                    </FormControl>
                  </CardActions>
                </Card>
              </Grid>

            </Grid>
            <div>
              <Typography variant="h6" color="textSecondary" gutterBottom>
                Issues:
         </Typography>
              <Alerts quality={this.state.quality} volume={this.state.volume} checked={this.state.checkedA}></Alerts>
            </div>
            <Button variant="contained" color="primary" onClick={this.props.click}>Log Out</Button>




          </div>
        </div>

      )
    } else {
      return (
        <div>
          <App /></div>
      )
    }
  }
}
export default Dashboard;