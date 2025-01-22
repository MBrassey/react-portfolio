import { motion } from "framer-motion";
import React from "react";
import "./index.scss";

function Header(props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <header className="flex-row space-between px-1">
        <div className="scramble">
          Matt Brassey
        </div>
        {props.children}
      </header>
    </motion.div>
  );
}

export default Header;