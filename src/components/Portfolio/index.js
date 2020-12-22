import React, { useState } from "react";
import Project from "../Project";

function Portfolio() {
  const [projects] = useState([
    {
      name: "galler3",
      description: "Single-page photography portfolio application that uses React state, props, Hooks, and reusable UI components",
      link: "https://mbrassey.github.io/galler3",
      repo: "https://github.com/MBrassey/galler3",
    },
    {
      name: "waviii",
      description: "Web3 Ethereum Wallet & Swap React Components Inside Social Media Dapp Concept",
      link: "https://waviii.herokuapp.com/admin/Wallet",
      repo: "https://github.com/MBrassey/waviii.io",
    },
    {
      name: "TurqMelon",
      description: "Image ranking & tipping platform written in ReactJS, powered by Solidity Smart Contracts",
      link: "https://github.com/MBrassey/TurquoiseMelon",
      repo: "https://github.com/MBrassey/TurquoiseMelon",
    },
    {
      name: "WeatherDash",
      description: "Weather dashboard concept using OpenWeather API, ipinfo.io API & jQuery/JS/HTML/CSS",
      link: "https://mbrassey.github.io/OpenWeather-Dashboard",
      repo: "https://github.com/MBrassey/OpenWeather-Dashboard",
    },
    {
        name: "ThoughtAPI",
        description: "API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list",
        link: "https://thoughtstreamapi-mbrassey.herokuapp.com/api/users",
        repo: "https://github.com/MBrassey/ThoughtStreamAPI",
      },
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project project={project} key={"project" + idx} />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
