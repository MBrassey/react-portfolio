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
      name: "TossUp",
      description:
        "Fully decentralized betting platform using Chainlink's Verifiable Randomness, Ethereum Smartcontracts, IPFS & React",
      link: "https://mbrassey-toss-up.on.fleek.co",
      repo: "https://github.com/MBrassey/toss-up",
    },
    {
      name: "Audius",
      description:
        "Node operator for the decentralized music platform Audius, managing 17 nodes and earning over 13,000 AUDIO tokens weekly by hosting music, images, and media discovery on its Solana-based sidechain.",
      link: "https://dashboard-audius-org.ipns.dweb.link/#/nodes/operator/0x68f656d19AC6d14dF209B1dd6E543b2E81d53D7B",
      repo: "https://github.com/AudiusProject",
    },
    {
      name: "waviii-token",
      description:
        "Ethereum Mainnet ERC-20 Token, total supply 1 million waviii. The token was built with Openzeppelin and deployed with Truffle.",
      link: "https://etherscan.io/token/0xBA00868912Af1a409F11E9c2B5d3a9376Cb3C2E2",
      repo: "https://github.com/MBrassey/waviii-token",
    },
    {
      name: "galler3",
      description:
        "Single-page photography portfolio application that uses React state, props, Hooks, and reusable UI components",
      link: "https://mbrassey.github.io/galler3",
      repo: "https://github.com/MBrassey/galler3",
    },
    {
      name: "UltraQueue",
      description:
        "Personal kanban style queue that saves tasks to localstorage, packaged by @electron-forge for Windows, Mac & Linux",
      link: "https://mbrassey.github.io/UltraQueue",
      repo: "https://github.com/MBrassey/UltraQueue",
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
    <div><br />
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project project={project} key={"project" + idx} />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
