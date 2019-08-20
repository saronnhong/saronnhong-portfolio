import React, { Component } from "react";

import './App.css';

class App extends Component {
  componentDidMount() {
    window.scrollTo(0,0);
  }

  render() {
    return (
      <div className="main">
        <a id="home"></a>

        <div className="homeScreen">
          <div className="container">
            <div className="row">
              <div className="col-md-12 imgRow">
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="nameText" >
                  Full Stack Web Developer
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="introText">
                  HTML | CSS | JavaScript | NodeJS | Express | MySQL | MongoDB | ReactJS
                </div>
              </div>
            </div>
            <div className="emptyRow">
            </div>
          </div>
        </div>
        <div className="aboutSection">
          <div className="container" id="aboutMe">
            <div className="row">
              <div className="col-md-6">
                <div className="row">
                  <div className="aboutMeTitle">
                    About Me
                  </div>
                </div>
                <div className="row">
                  <div className="aboutMeInfo">
                    <p>I am a Full Stack Web Developer with strong skills in HTML, CSS, Javascript, NodeJS, Express, MongoDB, and React. I’m passionate about learning new things and find great satisfaction in solving complex problems. </p>
                    <p>My previous career as a Software Test Engineer allowed me to understand the hard work it takes to put out quality software and the importance of identifying bugs in the early stages of software development. Applying this unique perspective and diverse skills to Web Development has helped me improve the quality of my applications and save time in the debugging phase of development.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 circular">
                <img src={process.env.PUBLIC_URL + "/img/saron.jpg"} />
              </div>
            </div>

            <div className="container">
              <div className="row" id="contact">
                <div className="col-md-6">
                  <div className="contactMeTitle">Contact Me </div>
                </div>
              </div>
              <div className="row">
                <div className="contactMeInfo">
                  <h6>Email: saronnhong@gmail.com</h6>
                  <h6>Phone: (209) 598-4517</h6>
                  <a className="contactLinks" href="www.linkedin.com/in/saronnhong"><h6>LinkedIn</h6></a>
                  <a className="contactLinks" href="https://github.com/saronnhong"><h6>Github</h6></a>
                </div>
                
              </div>
            </div>

          </div>
        </div>

      </div >
    );
  }
}

export default App;
