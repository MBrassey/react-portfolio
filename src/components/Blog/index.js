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
              <strong>January 22, 2025</strong> | <strong>Matt Brassey</strong>
            </p>
            <div
    style={{
      borderBottom: "3px solid var(--alpha)", 
      margin: "10px 0", 
    }}
  ></div>
            <h3 style={{ color: "var(--secondary)" }}>Blockchain Node Ops</h3>
            <p>
              Imagine peering into the very fabric of blockchain history,
              revisiting any block at will, and analyzing digital assets with
              unparalleled precision. This is the power unleashed by a full
              archival Ethereum node, and it's exactly what we at Blueprint
              embarked on building. Serving as our applications' data backbone,
              this node would enable us to rewind Ethereum's history, retrieve
              account states or smart contracts at any block, and conduct
              detailed digital asset portfolio analysis.
            </p>
            <p>
              In the following sections, I'll guide you through our
              journey—from the initial planning stages, overcoming deployment
              challenges, to the technical solutions I devised and the
              strategic decisions that shaped our project, highlighting the
              unique advantages that only archival nodes offer.
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
              Launching our Ethereum archival node project, I deeply reviewed
              and tested multiple execution and consensus layer clients. While
              client diversity plays a vital role in strengthening the ecosystem
              for validators, its importance is less pronounced for archival
              nodes. Our focus was primarily on integrating Ethereum's
              essential components for archiving purposes.
            </p>
            <ul>
              <li>
                <strong>Execution Clients</strong>: Manage transactions and
                blockchain state, essentially constructing the blockchain.
              </li>
              <li>
                <strong>Consensus Clients</strong>: Responsible for network
                agreement on block validity, acting as the on-chain architects
                ensuring consensus.
              </li>
            </ul>
            <p>
              Following extensive research and testing, I selected:
              <ul>
                <li>
                  <strong>Execution Client</strong>: Geth, for its unparalleled
                  archival capabilities, holds the oldest, largest, and most
                  comprehensive database of the Ethereum ledger.
                </li>
                <li>
                  <strong>Consensus Client</strong>: Lighthouse, written in Rust
                  and acclaimed for its resource-efficient design, perfectly
                  aligning with our performance objectives.
                </li>
              </ul>
            </p>

            <h3 style={{ color: "var(--secondary)" }}>
              Choosing Between Cloud & Bare Metal
            </h3>
            <p>
              Constructing a cost-efficient, high-performance Ethereum archival
              node required meticulous infrastructure selection. Initial
              evaluations included:
            </p>
            <ul>
              <li>
                <strong>Data APIs</strong>: Convenience countered by
                unsustainable cost escalation due to resource demands.
              </li>
              <li>
                <strong>Google Blockchain Node Engine</strong>: Offers
                restricted configuration options and limited control over the
                full node, hindering our objective of self-sufficient
                infrastructure management.
              </li>
              <li>
                <strong>Cloud Providers (e.g., AWS)</strong>: While offering
                flexibility, the management burden persisted, and cloud storage
                costs remained extremely prohibitive.
              </li>
            </ul>
            <p>
              Choosing physical "bare metal" deployment in a data center proved
              to be the ideal approach. It offered full control and
              self-management, significant cost savings over cloud solutions,
              and the high-speed performance of local NVMe storage critical for
              our data archiving goals.
            </p>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

export default Blog;