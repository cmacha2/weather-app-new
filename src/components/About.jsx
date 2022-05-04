import React from "react";
import "./About.css"
import ppic from "./pic.png";
import piclinkedlin from "./link.png";
import picgithub from "./github.png";
import twiter from "./twiter.png";
import { ExternalLink } from 'react-external-link';

export default function About(){
    

    return (
        <div className="about">
           <div className="container-info">
           {/* <strong><h1>About Me</h1></strong> */}
               <p>My name is Cristian Machado Gonzalez</p>
                    <p>Technology Enthusiast</p>
            <p>Trying to be a full stack web developer</p>
            <p>This is my first web project, made for the SoyHenry bootcamp.</p>
           </div>
           <div>
               <img  className="personal-pic" src={ppic} width={200} height={300} alt="PersonaPic" /> 
           </div>
           <div>
               <h2 className="texto-link">Links to my social networks</h2>
            <ExternalLink href="https://www.linkedin.com/in/cristian-machado-%E2%9C%B0-0a2bba204/"><img  className="img-linkedlin" src={piclinkedlin} width={65} height={65} alt="PersonaPic" /></ExternalLink>
            <ExternalLink href="https://github.com/cmacha2"><img  className="img-github" src={picgithub} width={50} height={50} alt="PersonaPic" /></ExternalLink>
            <ExternalLink href="https://twitter.com/cmacha2_08"><img  className="twiter" src={twiter} width={60} height={60} alt="PersonaPic" /></ExternalLink>
           </div>
        </div>
    )
}