import React, { useState } from "react";
import Project from "../Project";

function Portfolio() {
  const [projects] = useState([
    {
      name: "waviii.io",
      description:
        "Fully Decentralized ERC-20 Token, Wallet, Exchange & Price Chart - React, Web3js & RESTful API's ",
      link: "https://waviii.io",
      repo: "https://github.com/MBrassey/waviii.io",
    },
    {
      name: "BrewHound",
      description:
        "MERN stack Brewery Finder with GraphQL integration using multiple external API's",
      link: "https://brewhound-2.herokuapp.com",
      repo: "https://github.com/MBrassey/brewhound-2",
    },
    {
      name: "ALEXANDRIA",
      description:
        "MERN (MongoDB, Express.js, React, and Node.js) stack book search & save with GraphQL",
      link: "https://mbrassey-alexandria.herokuapp.com",
      repo: "https://github.com/MBrassey/alexandria",
    },
    {
      name: "TossUp",
      description:
        "Fully decentralized betting platform using Chainlink randomness, Ethereum Smartcontracts, IPFS & React frontend",
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
      name: "waviii-token",
      description:
        "Ethereum Mainnet ERC-20 Token, total supply 1 million waviii. The token was built with Openzeppelin and deployed with Truffle.",
      link:
        "https://etherscan.io/token/0xBA00868912Af1a409F11E9c2B5d3a9376Cb3C2E2",
      repo: "https://github.com/MBrassey/waviii-token",
    },
    {
      name: "WeatherDash",
      description:
        "Weather dashboard concept using OpenWeather API, ipinfo.io API & jQuery/JS/HTML/CSS",
      link: "https://mbrassey.github.io/OpenWeather-Dashboard",
      repo: "https://github.com/MBrassey/OpenWeather-Dashboard",
    },
    {
      name: "TurqMelon",
      description:
        "Image ranking & tipping platform written in ReactJS, powered by Solidity Smart Contracts & IPFS",
      link: "https://github.com/MBrassey/TurquoiseMelon",
      repo: "https://github.com/MBrassey/TurquoiseMelon",
    },
    {
      name: "UpSpeak",
      description:
        "Ethereum Powered Decentralized Social Network & Free Speech Platform",
      link: "https://github.com/MBrassey/upSpeak",
      repo: "https://github.com/MBrassey/upSpeak",
    },
    {
      name: "TheDevBlog",
      description:
        "Full stack CMS type blog application utilizing ORM with Sequelize/MySQL and adhering to the Model-View-Controller paradigm",
      link: "https://thedevblog-mbrassey.herokuapp.com",
      repo: "https://github.com/MBrassey/TheDevBlog",
    },
    {
      name: "galler3",
      description:
        "Single-page photography portfolio application that uses React state, props, Hooks, and reusable UI components",
      link: "https://mbrassey.github.io/galler3",
      repo: "https://github.com/MBrassey/galler3",
    },
    {
      name: "ThoughtAPI",
      description:
        "API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list",
      link: "https://thoughtstreamapi-mbrassey.herokuapp.com/api/users",
      repo: "https://github.com/MBrassey/ThoughtStreamAPI",
    },
    {
      name: "UltraQueue",
      description:
        "Personal kanban style queue that saves tasks to localstorage, packaged by @electron-forge for Windows, Mac & Linux",
      link: "https://mbrassey.github.io/UltraQueue",
      repo: "https://github.com/MBrassey/UltraQueue",
    },
    {
      name: "TechNewz",
      description:
        "Full stack Hacker News type blog application utilizing ORM with Sequelize and adhering to the Model-View-Controller paradigm",
      link: "https://technewz-mbrassey.herokuapp.com",
      repo: "https://github.com/MBrassey/TechNewz",
    },
    {
      name: "Ecommerce",
      description:
        "E-Commerce backend with Express.js and SQL database. Including robust REST API with multiple endpoints/routes",
      link: "https://ecommercesite-mbrassey.herokuapp.com/api/categories",
      repo: "https://github.com/MBrassey/EcommerceSite",
    },
    {
      name: "GitQuery",
      description:
        "Query the Github API for issues, usernames & languages with jQuery/JS/HTML/CSS",
      link: "https://mbrassey.github.io/GitQuery",
      repo: "https://github.com/MBrassey/GitQuery",
    },
    {
      name: "PassGen",
      description:
        "Configurable strong password generator written in pure JS/HTML/CSS",
      link: "https://mbrassey.github.io/PasswordGenerator",
      repo: "https://github.com/MBrassey/PasswordGenerator",
    },
    {
      name: "Scheduler",
      description:
        "Day scheduler concept using jQuery/JS/HTML/CSS, packaged by @electron-forge for Windows, Mac & Linux",
      link: "https://mbrassey.github.io/Scheduler",
      repo: "https://github.com/MBrassey/Scheduler",
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
