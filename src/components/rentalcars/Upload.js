import React, { Component } from 'react';
//import logo from './logo.svg';
import Webcam from "react-webcam"


class App extends Component {

  setRef = webcam => {
    this.webcam = webcam;
  };

  state = {
    pic: ""
  }


  capture = ()=>{
    const imageSrc = this.webcam.getScreenshot();
    console.log(imageSrc);

    fetch('http://localhost:3001/images', {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },body: JSON.stringify({image:{
      imageUrl: imageSrc
    }
    })
  })
    .then(res=>res.json())
    .then(image=>{
      this.setState({
        pic: image.imageUrl
      })
    })

  };

  render() {
    return (
      <div className="App">
        <h1>Your Webcam</h1>
        <Webcam
        ref={this.setRef}
        screenshotFormat="image/jpeg"
        />
        <br></br>
        <button onClick={this.capture}>Take Photo</button>
        <h1>Your Captured Image</h1>
        <img src={this.state.pic} alt="oolala"/>
        <p>Cloudinary URL: {this.state.pic}</p>
      </div>
    );
  }
}

export default App;
