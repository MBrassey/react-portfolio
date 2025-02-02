import React, { useState, useEffect, useRef } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { motion } from "framer-motion";
import ProfilePicture from "../../assets/cover/profile.jpg";
import TrufflePicture from "../../assets/cover/Truffle.gif";
import RemixPicture from "../../assets/cover/Remix.gif";
import waviiiPicture from "../../assets/projects/waviii.io.png";
import getAlgoBlockNumber from "../helpers/algoBlockNumber";
import getEthPrice from "../helpers/ethPrice";
import getHbarBalance from "../helpers/hbarBalance";
import BtcDifficulty from "../helpers/BtcDifficulty";
import ERC721Info from '../helpers/ERC721Info';

function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [loading, setLoading] = useState(false); // Added loading state
  const profileImgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (profileImgRef.current) {
      observer.observe(profileImgRef.current);
    }

    return () => {
      if (profileImgRef.current) {
        observer.unobserve(profileImgRef.current);
      }
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <section className="my-5">
        <div className="my-2">
          <div className="my-5 profileImg" ref={profileImgRef}>
            {isVisible && (
              <>
                {loading && (
                  <div className="spinner-container">
                    <div className="spinner"></div>
                  </div>
                )}
                <LazyLoadImage
                  src={ProfilePicture}
                  alt="Matt's Profile Picture"
                  style={{
                    borderRadius: ".2%",
                    overflow: "visible",
                    boxShadow: "0 12px 24px 0 rgba(0, 0, 0, 0.7)",
                    height: "100%",
                    width: "100%",
                    marginTop: "9px",
                    transition: "opacity 0.5s ease-in-out",
                    display: loading ? "none" : "block",
                  }}
                  afterLoad={() => setLoading(false)}
                  beforeLoad={() => setLoading(true)}
                />
              </>
            )}
          </div>
          <div className="about-text resume-text">
  As a Senior Blockchain Infrastructure Engineer, I’ve designed and implemented a robust 
  microservice architecture with a unified blockchain gateway that aggregates data from 
  over 25 unique blockchain protocols using third-party APIs and managed nodes. This system 
  delivers live and historical block, balance, staked balance, NFT balance, and transaction 
  data through a standardized OpenAPI specification of my design. I built a hybrid blockchain 
  infrastructure from the ground up, combining on-premises bare-metal servers with cloud-based 
  nodes, automating full-node deployments, monitoring performance, resolving issues, and upgrading 
  node software. Additionally, I’ve developed custom Node Exporter and Grafana metrics for real-time 
  visibility into operational details like peer count, block height, validator status, uptime, and 
  resource utilization. <br /><br />Previously, 
  I managed over 200 cryptocurrency wallets at a leading exchange, integrating new layer 1 and layer 2 
  protocols and ensuring seamless deposits, withdrawals, and address functionalities. I hold 
  a <strong>
    <a href="https://raw.githubusercontent.com/MBrassey/MediaStore/main/Images/UofA_Graduate.png">
      Full Stack Web Developer Certification
    </a>
  </strong>, a <strong>
    <a href="https://www.credential.net/44a73119-b770-4a10-901c-7aa6508d5c65#gs.qu4xf9">
      Certified Blockchain Architect
    </a>
  </strong>, and a <strong>
    <a href="https://www.linkedin.com/in/mbrassey/details/featured/1635483692387/single-media-viewer/?profileId=ACoAADGbAe0Bym7la1XJIANHyWfMdb4dt4P_3BI">
      Blockchain Developer Certification
    </a>
  </strong> with expertise in Blockchain, Staking, Validator Operation, 
  Smart Contracts, DeFi, and Web3 technologies.
</div>
          <br />

          <div className="about-text resume-text">
          I have extensive experience integrating third-party APIs and blockchain nodes to provide accurate, real-time data essential for various applications.
  For instance, Bitcoin's current difficulty is <strong className="data-point"><BtcDifficulty /></strong>, the latest Algorand round is <strong className="data-point">{getAlgoBlockNumber()}</strong>, 
  the current Ether price is <strong className="data-point">${getEthPrice()}</strong>, 
  and the live Hedera balance for account <strong>0.0.6287097</strong> is <strong className="data-point">{getHbarBalance()} HBAR</strong>.
  <br /><br />
  The following table demonstrates my possession of a DAPPU token, a rare NFT awarded for earning the Blockchain Developer 
  Certification through Dapp University on Mar-03-2020. You can also search any other Ethereum&nbsp;
  <a
    href="https://etherscan.io/token/0x476edA02BF0C35603fD6E0306cf85381029F90F1#balances"
    target="_blank"
    rel="noopener noreferrer"
    className="etherscan-link"
  >
  address
  </a> 
  &nbsp;and press "Enter" to see if it holds a DAPPU token.

<br /><br />
  <ERC721Info />
 </div>
<br />

<div className="about-text resume-text">
One of my areas of focus is on creating unified data formats to simplify blockchain integration across 
  multiple protocols. Interacting directly with blockchain nodes typically involves using JSON-RPC APIs for querying 
  data, broadcasting transactions, and interacting with smart contracts. Services like QuickNode and RapidAPI provide 
  HTTP-based and GraphQL APIs, while providers such as Alchemy and Infura, designed for use with libraries like web3.js 
  and ethers.js, offer JSON-RPC and WebSocket endpoints, each presenting different integration methods. Even within the 
  same provider, API implementations often vary between protocols. While EVM-compatible chains and Layer 2s may share 
  similar APIs, non-EVM-compatible or unique blockchains frequently require entirely distinct approaches. 
  <br /><br />
  To address these challenges, I developed a unified blockchain gateway built with a custom OpenAPI Specification and 
  microservices that distill similarities into a consistent and reliable format while reconciling differences in output data across providers and 
  protocols.
</div>
<br />
          <div className="about-text resume-text">
            I've developed a few dApps on Ethereum Mainnet & Testnet. My workflow when creating a decentralized application begins with
            writing and deploying a solidity smart contract to a local blockchain
            using truffle & ganache.
            <LazyLoadImage
              src={TrufflePicture}
              alt="Truffle Commands"
              className="image"
            />
            I unit test the contract using assertions in Javascript or the Jest
            framework. Next, I model and wire the backend using Express, frontend
            with React & Web3. I deploy the contract to an Ethereum testnet such
            as Kovan, Ropsten or Rinkeby using the Remix IDE.
            <LazyLoadImage
              src={RemixPicture}
              alt="Remix IDE"
              className="image"
            />
            Finally, I deploy the smartcontract(s) to Ethereum Mainnet & webapp
            assets to the InterPlanetary Filesystem (IPFS). I have experience in
            registering mainnet contract sourcecode, abi's and contract profiles
            including token / contract logos to Etherscan.
          </div>
          <br />
          <div className="about-text resume-text">
            Below is my ERC-20 Token, Token Wallet & Exchange, waviii.io. I
            deployed waviii-token to Ethereum Mainnet, it has a real value and
            you can exchange ETH and waviii back and forth. The total supply is
            1 million tokens, most of which reside on my token exchange contract
            listening for trades at any time. I used web3 to provide MetaMask
            access to the token and exchange smartcontracts.
            <a
  href="https://waviii.io/"
  target="_blank"
  rel="noopener noreferrer"
  style={{
    display: "block",
    margin: "0",
    padding: "0",
    border: "none",
  }}
>
  <LazyLoadImage
    src={waviiiPicture}
    alt="waviii.io image"
    className="image"
    style={{
      display: "block",
      margin: "0",
      padding: "0",
      border: "none",
    }}
  />
</a>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

export default About;