import { LazyLoadImage } from "react-lazy-load-image-component";
import ProfilePicture from "../../assets/cover/profile.jpg";
import TrufflePicture from "../../assets/cover/Truffle.gif";
import RemixPicture from "../../assets/cover/Remix.gif";
import FadeIn from "react-fade-in";
import React from "react";

function About() {
  return (
    <FadeIn>
      <section className="my-5">
        <div className="my-2">
          <div className="my-5 profileImg">
            <LazyLoadImage
              src={ProfilePicture}
              alt="Matt's Profile Picture"
              style={{
                borderRadius: "3%",
                overflow: "visible",
                boxShadow: "0 12px 24px 0 rgba(0, 0, 0, 0.7)",
                height: "100%",
                width: "100%",
                marginTop: "9px",
                border: "solid 3px black",
              }}
            />
          </div>
          <div className="about-text resume-text">
            Welcome,
            <br /> I'm <strong>Matt Brassey</strong> - Full stack blockchain
            developer with SysOps & DevOps background. Known among staff for
            strong wit and attention to detail no matter the complexity of the
            project or severity of it’s operations. Proven experience applying
            continuous integration within small group and large, corporate team
            settings. Strong ability to modularize large, complex project
            objectives into concise and manageable parts. recently obtained the{" "}
            <strong>
              <a href="https://www.credential.net/44a73119-b770-4a10-901c-7aa6508d5c65#gs.qu4xf9">
                Certified Blockchain Architect
              </a>
            </strong>
            credential from the Blockchain Council, as well as a{" "}
            <strong>Full Stack Development Certification</strong> from the
            University of Arizona for completing a 24 Week Coding Bootcamp.
            Intense interest in distributed systems, decentralized finance and
            blockchain technology. Keen technologist with an insatiable desire
            to learn, build, improve and collaborate on world changing platforms
            and applications.
          </div>
        </div>
        <div className="about-text resume-text">
          My workflow when creating a decentralized application begins with
          writing & deploying a solidity smart contract to a local blockchain
          using truffle & ganache.
          <LazyLoadImage
            src={TrufflePicture}
            alt="Truffle Commands"
            className="image"
          />
          I unit test the contract using assertions in Javascript or the Jest
          framework. Next, I model & wire the backend using Express, frontend
          with React & Web3. I deploy the contract to an Ethereum testnet such
          as Kovan, Ropsten or Rinkeby using the Remix IDE.
          <LazyLoadImage
            src={RemixPicture}
            alt="Remix IDE"
            className="image"
          />
          Finally, I deploy the smartcontract(s) to Ethereum Mainnet & webapp
          assets to the InterPlanetary Filesystem (IPFS). I'm experienced in
          registering mainnet contract sourcecode, abi's and contract profile to
          Etherscan.
        </div>
      </section>
    </FadeIn>
  );
}

export default About;
