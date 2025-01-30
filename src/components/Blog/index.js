import React, { useEffect, useRef } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { motion } from "framer-motion";
import BlogImage from "../../assets/cover/cover.png";
import ArchivalGethNodeImg from "../../assets/cover/GETH01.png";
import ChainSizeGeth from '../helpers/chainSizeGeth';

function Blog() {
  const blogImgWrapperRef = useRef(null);

  useEffect(() => {
    if (!blogImgWrapperRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          blogImgWrapperRef.current.style.opacity = "1";
        }
      },
      { threshold: 0.1 }
    );

    const element = blogImgWrapperRef.current;
    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
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
    <div
      ref={blogImgWrapperRef}
      style={{
        opacity: 0,
        transition: "opacity 0.5s ease-in-out",
      }}
    >
      <LazyLoadImage
        src={BlogImage}
        alt="Blog Cover Image"
        className="blog-cover-image"
        style={{
          width: "100%",
          borderRadius: "1%",
          boxShadow: "0 12px 24px 0 rgba(0, 0, 0, 0.7)",
          marginBottom: "20px",
        }}
      />
    </div>

    <div className="about-text resume-text">
      <h2>
        Ethereum Archival Node
      </h2>
      <p>
        <strong>April 4, 2024</strong> | <strong>Matt Brassey</strong> <i>- 6 min read</i>
      </p>
      <div
        style={{
          borderBottom: "2px solid var(--primary)",
          margin: "20px 10px",
        }}
      ></div>
      <h3>Blockchain Node Operations</h3>
      <p>
      At Blueprint, I recently built a complete Ethereum archival node. This infrastructure provides 
      unparalleled access to historical state data, reaching all the way back to the genesis block. It 
      enables us to query the complete transaction history, retrieve account balances, smart contract states, 
      and event logs at any block level. The archival node’s capabilities unlock invaluable insights into Ethereum’s 
      extensive <strong className="data-point">
  <a href="https://etherscan.io/chartsync/chainarchive" target="_blank" rel="noopener noreferrer">
    <ChainSizeGeth />
  </a>
</strong> blockchain, supporting detailed analysis and empowering applications that rely on comprehensive 
      historical data.
      </p>
      <p>
      This blog offers a detailed account of the journey—from orchestrating Ethereum’s execution and 
      consensus components to selecting the right infrastructure, addressing hardware challenges, achieving 
      full synchronization, and optimizing for long-term reliability. Each decision was driven by 
      my commitment to building a high-performance, self-managed system tailored to meet Blueprint’s 
      specific needs.
      </p>
      <LazyLoadImage
        src={ArchivalGethNodeImg}
        alt="Archival Geth Node"
        style={{
          width: "100%",
          borderRadius: "1%",
          boxShadow: "0 12px 24px 0 rgba(0, 0, 0, 0.7)",
          marginBottom: "20px",
        }}
      />

      <h3>Selecting the Right Clients</h3>
      <p>
        Choosing the right execution and consensus clients was a critical step
        in building the archival node. These components form the foundation of
        the node's functionality:
      </p>
      <ul>
        <li>
          <strong>Execution Clients</strong>: Responsible for processing
          transactions, updating blockchain state, and maintaining a complete
          record of the ledger.
        </li>
        <li>
          <strong>Consensus Clients</strong>: Ensure network agreement and
          verify the validity of blocks.
        </li>
      </ul>
      <p>
      I tested a variety of execution clients, including Nethermind, Besu, Erigon, and Geth, 
      as well as consensus clients like Nimbus, Lodestar, Lighthouse, and Prysm. By experimenting 
      with different combinations, I was able to explore their features, performance, and potential 
      drawbacks. After thorough testing and evaluation, I decided on the following:
</p>
<ul>
  <li>
    <strong>Geth (Execution Client)</strong>: Geth (Go Ethereum) stood out for its unmatched archival capabilities, maintaining the original, oldest & largest Ethereum database.
  </li>
  <li>
    <strong>Prysm (Consensus Client)</strong>: Written in Go, Prysm offered exceptional performance and resource efficiency, aligning with my goals for long-term stability & client diversity.
  </li>
</ul>
<p>
<i>I initially used Lighthouse in production for several months but eventually switched to Prysm due to challenges with
 low peer count and inefficient peer discovery in Lighthouse. Since migrating, I’ve experienced a significantly higher
  and more stable peer count, improved efficiency, and better performance in keeping up with the chain tip using Prysm.</i>
</p>


      <h3>
        Choosing Between Cloud and Bare Metal
      </h3>
      <p>
        A key part of this project involved deciding whether to use cloud
        infrastructure or physical hardware. I evaluated multiple options to
        balance cost, performance, and control:
      </p>
      <ul>
        <li>
          <strong>Data APIs</strong>: Convenient but financially unsustainable
          due to high costs associated with resource demand. No exposure or control over the underlying node.
        </li>
        <li>
          <strong>Google Blockchain Node Engine</strong>: While promising, it also
          lacks exposure or control over the underlying node's components.
        </li>
        <li>
          <strong>Cloud Providers (e.g., AWS)</strong>: Offered scalability but
          proved far too expensive for the storage and computational power
          required.
        </li>
      </ul>
      <p>
        I ultimately chose to deploy the node on bare-metal servers in a data
        center. This approach provided:
      </p>
      <ul>
        <li>Full control over hardware, software and configuration.</li>
        <li>Substantial (88%) cost savings compared to cloud solutions.</li>
        <li>
          High-speed performance from local NVMe storage, essential for large
          archival workloads.
        </li>
        <li>
          The ability to take ownership and make copies of the full Ethereum chain data archive. 
        </li>
      </ul>

      <h3>
        Strategic Hardware Implementation
      </h3>
      <p>
        Initially, I set up a 2U server with NVMe drives in a RAID array using
        a ribbon riser extender. While functional, this configuration presented
        reliability issues due to the fragility of the ribbon riser.
      </p>
      <p>
        To address this, I redesigned the hardware layout, replacing the ribbon
        riser with a right-angle riser extender. This change allowed horizontal
        placement of the RAID controller and enabled a transition to a more
        compact ½ U server chassis. The redesign delivered several benefits:
      </p>
      <ul>
        <li>
          <strong>Improved cooling</strong>: Enhanced airflow within the smaller
          chassis.
        </li>
        <li>
          <strong>Reduced rack space</strong>: Minimized physical footprint by
          75%.
        </li>
        <li>
          <strong>Cost efficiency</strong>: Lowered hosting costs due to reduced
          server size.
        </li>
      </ul>

      <h3>
        Ongoing Maintenance and Performance
      </h3>
      <p>
      Syncing the Ethereum blockchain from the genesis block was a deliberate decision to ensure data integrity 
      and accuracy. This process, spanning roughly five months, deployed in a datacenter with high bandwidth, involved 
      synchronizing <strong className="data-point"><a href="https://etherscan.io/chartsync/chainarchive" target="_blank" rel="noopener noreferrer">
    <ChainSizeGeth />
  </a>
</strong> of chain data. The download started slowly, especially for the oldest data, as fewer archival peers
 exist with this information available. As the process advanced and approached the chain tip, the blockchain itself became 
 increasingly complex and resource-intensive, resulting in a significantly prolonged synchronization time compared to other 
 execution clients or archival nodes in general. 
 <br /><br />
 Despite the protracted synchronization timeline, Geth provides the most extensive PoW archival database in existence, with chain data exceeding twice 
 the size of Solana’s archival data. It also greatly surpasses the archival capabilities of Ethereum’s other execution clients, 
 such as Besu, Nethermind, and Erigon. This effort was essential for achieving two key objectives:
      </p>
      <ul>
        <li>
          <strong>Validation of Ledger Integrity</strong>: Guaranteed a fully
          validated historical record obtained exclusively by decentralized peers.
        </li>
        <li>
          <strong>Procured our own Archival Database</strong>: While the Ethereum node was synchronizing we considered
          other ways of obtaining the data, such as purchasing a copy of Geth's blockchain data from a third party. However, the
          options and availability were limited, and the cost was prohibitive. Now we've generated our own copy of the chain data 
          with potential resell value. 
        </li>
        <li>
          <strong>Obtained Synchronization Insights</strong>: The overwhelming synchronization time highlighted the limited
          availability of peers with archival data, emphasizing the rarity of
          such nodes.
        </li>
      </ul>
      <p>
      After completing synchronization, the node demonstrated its ability to provide unlimited access to 100% of the 
      Ethereum blockchain, from genesis to chain tip, including blocks, transactions, contract states, account 
      balances, event logs and storage data, while efficiently handling both historical and live API queries.
      </p>
      <p><i>
      I regularly back up the full archival chain data, ensuring that a complete resynchronization is never necessary 
      and new archival nodes can be set up quickly and with relative ease.
      </i></p>

      <h3>
  Reflections and Optimizations
</h3>
<p>
  Reflecting on the journey to build the Ethereum archival node, I encountered several challenges that required creative problem-solving and adaptability. For instance, the initial use of a ribbon riser extender caused reliability issues that were later resolved by switching to a right-angle riser and optimizing the hardware layout. The extended synchronization timeline highlighted the scarcity of archival peers, which reinforced the importance of maintaining this unique infrastructure. Additionally, transitioning from Lighthouse to Prysm addressed low peer counts and inefficient peer discovery, ultimately stabilizing performance. These experiences not only strengthened the outcome of the project but also provided valuable insights for future initiatives:
</p>
<ul>
  <li>
    <strong>Geth</strong>: Delivered comprehensive archival support, ensuring full access to Ethereum’s historical and real-time data with unparalleled robustness.
  </li>
  <li>
    <strong>Prysm</strong>: Significantly improved peer discovery and synchronization stability, resolving issues experienced with Lighthouse and enhancing overall consensus performance.
  </li>
  <li>
    <strong>Strategic hardware improvements</strong>: Moving to a compact ½ U chassis and adopting a right-angle riser extender improved reliability, cooling efficiency, and reduced hosting costs.
  </li>
  <li>
  <strong>Synchronization insights</strong>: Syncing from genesis to the chain tip provided valuable insights into the time and resources required to complete a full synchronization. This process highlighted the scarcity of archival peers, emphasized the challenges of maintaining a complete blockchain archive, and reinforced the importance of ensuring data integrity and resilience.
</li>
</ul>

      <h3>Conclusion</h3>
      <p>
        This project represents a significant milestone in my career at
        Blueprint. Building a full Ethereum archival node required balancing
        technical challenges, infrastructure decisions, and long-term
        optimization. The result is a high-performing, repeatable, reliable data system
        that powers our applications with real-time and historical blockchain
        insights. This achievement lays a solid foundation for future projects, enabling scalable, 
        data-driven solutions to address even more complex blockchain challenges.
      </p>
    </div>
  </div>
</section>
    </motion.div>
  );
}

export default Blog;