import React, { Component } from "react";
// import { BrowserRouter, Route, Link } from "react-router-dom";
// import { HashLink as Link } from 'react-router-hash-link';
import Project from "./projectList.json";
import "./style.css";



class Portfolio extends Component  {
    componentDidMount() {
        window.scrollTo(0,0);
      }
    render(){
    return (
        <div className="portMain">
            <div className="container portContainer">
                <div className="row">
                    <div className="col-md-12">
                        <h1 id="portfolioTitle">My Portfolio</h1>
                    </div>
                </div>

                {Project.map((projects) =>
                    <div className="row">
                        <div className="col-md-6 cardRow">
                            <div className="card cardPort">
                                <a href={projects.deployLink1}>
                                    <img width="100%" src={process.env.PUBLIC_URL + projects.imageLocation1} className="card-img-top" alt="..." />
                                </a>
                                <div className="card-body">
                                    <div className="card-text">{projects.project1}
                                        <a href={projects.githubLink1}>
                                            <i className="fab fa-github githubFA"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 cardRow">
                            <div className="card cardPort">
                                
                                <a href={projects.deployLink2}>
                                    <img width="100%" src={process.env.PUBLIC_URL + projects.imageLocation2} className="card-img-top" alt="..." />
                                </a>
                                <div className="card-body">
                                    <div className="card-text">{projects.project2}
                                    
                                        <a href={projects.githubLink2}>
                                        <i className="fab fa-github githubFA"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div >
    );
}
}
export default Portfolio;
