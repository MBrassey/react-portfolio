import PageContent from "../PageContent";
import Portfolio from "../Portfolio";
import { motion } from "framer-motion";
import Blog from "../Blog";
import Resume from "../Resume";
import About from "../About";
import React from "react";

function Page({ currentPage }) {
  const renderPage = () => {
    switch (currentPage.name) {
      case "about me":
        return <About />;
      case "portfolio":
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Portfolio />
          </motion.div>
        );
      case "Blog":
      return <Blog />;
      case "resume":
        return <Resume />;
      default:
        return <About />;
    }
  };

  return (
    <section>
      <PageContent>{renderPage()}</PageContent>
    </section>
  );
}

export default Page;