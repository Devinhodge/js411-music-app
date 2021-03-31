
import React from 'react';

function Alerts(props) {
  
  if (props.quality !== 'Normal') {
    return (
      <div><h3>Quality set to {props.quality}</h3></div>
    )
  }
  else if (props.volume >= 80) {
    return (<div><h4>Volumes above 80 can lead to hearing loss</h4></div>)
  } else if (props.checked === false) {
    return (<div><h4>Device is not connected to the internet!</h4></div>)
  }
  else { return (<div></div>) }
}
  

export default Alerts