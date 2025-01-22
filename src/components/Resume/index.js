import { motion } from "framer-motion";
import React, { useState, useEffect, useRef } from "react";

function Resume() {
  const [isVisible, setIsVisible] = useState(false);
  const codingActivityRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (codingActivityRef.current) {
      observer.observe(codingActivityRef.current);
    }

    return () => {
      if (codingActivityRef.current) {
        observer.unobserve(codingActivityRef.current);
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
          <div className="resume-text">
  As the lead for blockchain infrastructure at Blueprint, a <strong>hivemind.capital</strong> venture startup specializing in blockchain services, I’ve personally designed and built the entire backend for the flagship blockchain wallet portfolio and financial analytics product. I’ve orchestrated the creation and oversight of our comprehensive blockchain infrastructure, including the design, testing, and deployment of fleets of full nodes and profitable validators across multiple protocols. This includes automating installation and configuration processes and developing microservice APIs to expose blockchain data to our frontend applications. <br /> <br />I’ve also driven substantial cost savings by migrating resource-intensive nodes, such as <strong>Solana</strong> and <strong>archival Ethereum</strong>, from cloud-based solutions to bare-metal systems hosted in an on-premises datacenter, where I handle the physical setup and management of the network and servers.
</div>
          <form
            action="https://docs.google.com/document/d/1T7uHv2RcH_wzERwJKoahqh9ODKdaJ48ci40nKEBViNY/"
            method="get"
            target="_blank"
          >
            <button alt="View My Resume" type="submit">
              View My Resume
            </button>
          </form>
          <br />
          <div className="resume-text">
            "Matt has been an integral part of the Wallet Operations team for the last two years and has consistently demonstrated his ability to efficiently manage and maintain complex wallet infrastructure and integrate new blockchain projects. His strong technical knowledge allows him to implement innovative solutions and significantly improve our operational processes." -{" "}
            <a href="https://www.linkedin.com/in/artem-tarasov-07907091/">Artem Tarasov</a>
          </div>
          <br />
          <div className="resume-text">
            "I worked with Matt for two years and it was an absolute pleasure. His work ethic set the bar for the team. He is an outstanding Blockchain Wallet Engineer. He knocked all of his assigned projects out of the park. He is excellent at writing clear and precise technical documentation. Last, but not least, he was always available to troubleshoot issues with fellow engineers no matter what his workload was like at the time." -{" "}
            <a href="https://www.linkedin.com/in/scott-sisco-b079053a/">Scott Sisco</a>
          </div>
          <br />
          <div className="resume-text">
            "Matt is a hard worker and was able to produce great code in a neat and timely manner. His contributions to our projects were beyond valuable, showing a great understanding of the technologies we used within our full stack web app." -{" "}
            <a href="https://www.linkedin.com/in/ryan-brown-83760479/">Ryan Brown</a>
          </div>
          <br />
          <div className="resume-text">
            "It was awesome to watch the project come together thanks to Matt's ability to translate wireframed concepts into reality and his deep knowledge of the technologies our app is built upon." -{" "}
            <a href="https://www.linkedin.com/in/matthew-ondrovic-a43826131/">Matthew Ondrovic</a>
          </div>
          <div className="CAcontainer" ref={codingActivityRef}>
  <div className={`CodingActivity ${isVisible ? "visible" : ""}`}>
    <div className="overlay-text">Coding Time</div>
  </div>
</div>
          <ul className="dev-icons">
            <li className="list-inline-item">
              <i className="fab fa-html5"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-css3-alt"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-bootstrap"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-markdown"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-ethereum"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-js-square"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-react"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-node-js"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-npm"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-git"></i>
            </li>
          </ul>
        </div>
      </section>
    </motion.div>
  );
}

export default Resume;