import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
// import axios from 'axios'

function App() {
  // const [getMessage, setGetMessage] = useState({})

  // useEffect(()=>{
  //   console.log('working...');
  //   axios.get('http://127.0.0.1:5000/flask/hello').then(response => {
  //     console.log("SUCCESS", response)
  //     setGetMessage(response)
  //   }).catch(error => {
  //     console.log(error)
  //   })

  //   // axios.get('http://localhost:5000/flask/hello').then(response => {
  //   //   console.log("SUCCESS", response)
  //   //   setGetMessage(response)
  //   // }).catch(error => {
  //   //   console.log(error)
  //   // })

  // }, [])
  return (
    <div className="App">
      <iframe className="iframe_container" src="https://html5.gamedistribution.com/f2af2ecc05a445edb6862c589e996a7e/" scrolling="none" frameborder="0"></iframe>
			<div className="center box_container">
				<h3>Video Stream</h3>
				{/* <img className="pad15" src="{{ url_for('video_feed') }}" width="100%" /> */}
				<div className="left-align intruction_section">
					<h5 className="center"><b>Instructions</b></h5>
					<p>Move your face up, down, left and right to guide the player. The green dot represents the center of the face. When the green moves to one of the four boxes, an appropriate action is triggered.</p>
					<h5 className="center"><b>Enjoy!</b></h5>
					<h6><u><i>Tips and hints</i></u></h6>
					<p>Face the screen at all times. The game uses webcam to track facial movements. For example when turning right, instead of looking right, move your head a couple of inches to the right</p>
					<p>You can check your position in the video stream above.</p>
				</div>
			</div>
    </div>
  );
}

export default App;
