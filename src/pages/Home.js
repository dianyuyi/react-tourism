import React from "react";
import { motion } from "framer-motion";
import { Hero } from "../components";

const Home = () => {
  return (
    <motion.div exit={{ opacity: 0 }}>
      <Hero />
      <h1>home</h1>
    </motion.div>
  );
};

export default Home;
