import React, { useEffect, useRef } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { motion } from "framer-motion";
import BlogImage from "../../assets/cover/cover.png";
import ArchivalGethNodeImg from "../../assets/cover/GETH01.png";

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
      <h2 style={{ fontSize: "2rem", color: "var(--secondary)" }}>
        Ethereum Archival Node
      </h2>
      <p style={{ fontSize: "1rem", color: "var(--dark)" }}>
        <strong>January 23, 2025</strong> | <strong>Matt Brassey</strong>
      </p>
      <div
        style={{
          borderBottom: "2px solid var(--primary)",
          margin: "20px 10px",
        }}
      ></div>
      <h3 style={{ color: "var(--secondary)" }}>Blockchain Node Operations</h3>
      <p>
        Recently at Blueprint, I took on the task of building a
        full Ethereum archival node. This project focused on building a reliable blockchain 
        node designed to deliver accurate data for an API specification I developed, drawing 
        on the commonalities found in data provided by various blockchain nodes. The 
        archival node would enable us to query Ethereum’s full transaction history, retrieve 
        account and contract states at any block, and analyze digital assets in-depth.
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

      <h3 style={{ color: "var(--secondary)" }}>Selecting the Right Clients</h3>
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
        After extensive testing and evaluation, I selected the following:
      </p>
      <ul>
        <li>
          <strong>Geth (Execution Client)</strong>: Geth stood out for its
          unmatched archival capabilities, maintaining the most comprehensive
          Ethereum database available.
        </li>
        <li>
          <strong>Lighthouse (Consensus Client)</strong>: Written in Rust,
          Lighthouse offered exceptional performance and resource efficiency,
          aligning with my goals for long-term stability.
        </li>
      </ul>

      <h3 style={{ color: "var(--secondary)" }}>
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
          due to high costs associated with resource demand.
        </li>
        <li>
          <strong>Google Blockchain Node Engine</strong>: While promising, it
          lacked the flexibility and control needed for managing a
          self-sufficient archival node.
        </li>
        <li>
          <strong>Cloud Providers (e.g., AWS)</strong>: Offered scalability but
          proved too expensive for the storage and computational power
          required.
        </li>
      </ul>
      <p>
        I ultimately chose to deploy the node on bare-metal servers in a data
        center. This approach provided:
      </p>
      <ul>
        <li>Full control over hardware and configuration.</li>
        <li>Substantial cost savings compared to cloud solutions.</li>
        <li>
          High-speed performance from local NVMe storage, essential for large
          archival workloads.
        </li>
      </ul>

      <h3 style={{ color: "var(--secondary)" }}>
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

      <h3 style={{ color: "var(--secondary)" }}>
        Ongoing Maintenance and Performance
      </h3>
      <p>
        Syncing the Ethereum blockchain from the genesis block was a deliberate
        decision to ensure data integrity and accuracy. This process, which
        spanned six months, consisting of over 21TB of chain data, served two key purposes:
      </p>
      <ul>
        <li>
          <strong>Validation of Ledger Integrity</strong>: Guaranteed a fully
          validated historical record.
        </li>
        <li>
          <strong>Archival Network Insights</strong>: Highlighted the limited
          availability of peers with archival data, emphasizing the rarity of
          such nodes.
        </li>
      </ul>
      <p>
        After completing synchronization, the node demonstrated its ability to:
      </p>
      <ul>
        <li>
          <strong>Provide live & historical data access</strong>: Unlimited access to 100% of the Ethereum blockchain
          from genesis to chain tip.
        </li>
        <li>
          <strong>Handle diverse API queries</strong>: Efficiently serve both
          historical and live data requests.
        </li>
      </ul>

      <h3 style={{ color: "var(--secondary)" }}>
        Reflections and Optimizations
      </h3>
      <p>
        Reflecting on the project, I identified areas for improvement. For
        example, adopting a right-angle riser extender earlier would have
        avoided reliability issues. However, the core technology stack and
        hardware decisions proved sound:
      </p>
      <ul>
        <li>
          <strong>Geth</strong>: Delivered robust and comprehensive archival
          support.
        </li>
        <li>
          <strong>Lighthouse</strong>: Minimized operational costs with its
          resource-efficient design.
        </li>
        <li>
          <strong>Hardware refinements</strong>: Iterative improvements enhanced
          reliability and reduced costs.
        </li>
      </ul>

      <h3 style={{ color: "var(--secondary)" }}>Conclusion</h3>
      <p>
        This project represents a significant milestone in my career at
        Blueprint. Building a full Ethereum archival node required balancing
        technical challenges, infrastructure decisions, and long-term
        optimization. The result is a high-performing, repeatable, reliable data system
        that powers our applications with real-time and historical blockchain
        insights.
      </p>
    </div>
  </div>
</section>
    </motion.div>
  );
}

export default Blog;