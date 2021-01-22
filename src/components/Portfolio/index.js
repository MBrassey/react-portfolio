import React, { useState } from "react";
import Project from "../Project";

function Portfolio() {
  const [projects] = useState([
    {
      name: "BrewHound",
      description:
        "MERN stack Brewery Finder with GraphQL integration using multiple external API's",
      link: "https://brewhound-2.herokuapp.com",
      repo: "https://github.com/MBrassey/brewhound-2",
    },
    {
      name: "TossUp",
      description:
        "MERN (MongoDB, Express.js, React, and Node.js) stack Brewery Finder with GraphQL",
      link: "https://mbrassey-toss-up.on.fleek.co",
      repo: "https://github.com/MBrassey/toss-up",
    },
    {
      name: "Deep",
      description:
        "MERN (MongoDB, Express.js, React, and Node.js) stack social network ",
      link: "https://mbrassey-deep-thoughts.herokuapp.com",
      repo: "https://github.com/MBrassey/deep-thoughts",
    },
    {
      name: "ALEXANDRIA",
      description:
        "MERN (MongoDB, Express.js, React, and Node.js) stack book search & save with GraphQL",
      link: "https://mbrassey-alexandria.herokuapp.com",
      repo: "https://github.com/MBrassey/alexandria",
    },
    {
      name: "galler3",
      description:
        "Single-page photography portfolio application that uses React state, props, Hooks, and reusable UI components",
      link: "https://mbrassey.github.io/galler3",
      repo: "https://github.com/MBrassey/galler3",
    },
    {
      name: "waviii",
      description:
        "Web3 Ethereum Wallet & ERC-20 Token Swap React Components Inside Social Media Dapp Concept",
      link: "https://waviii.herokuapp.com/admin/Wallet",
      repo: "https://github.com/MBrassey/waviii.io",
    },
    {
      name: "TurqMelon",
      description:
        "Image ranking & tipping platform written in ReactJS, powered by Solidity Smart Contracts & IPFS",
      link: "https://github.com/MBrassey/TurquoiseMelon",
      repo: "https://github.com/MBrassey/TurquoiseMelon",
    },
    {
      name: "WeatherDash",
      description:
        "Weather dashboard concept using OpenWeather API, ipinfo.io API & jQuery/JS/HTML/CSS",
      link: "https://mbrassey.github.io/OpenWeather-Dashboard",
      repo: "https://github.com/MBrassey/OpenWeather-Dashboard",
    },
    {
      name: "ThoughtAPI",
      description:
        "API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list",
      link: "https://thoughtstreamapi-mbrassey.herokuapp.com/api/users",
      repo: "https://github.com/MBrassey/ThoughtStreamAPI",
    },
    {
      name: "TheDevBlog",
      description:
        "Full stack CMS type blog application utilizing ORM with Sequelize/MySQL and adhering to the Model-View-Controller paradigm",
      link: "https://thedevblog-mbrassey.herokuapp.com",
      repo: "https://github.com/MBrassey/TheDevBlog",
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
