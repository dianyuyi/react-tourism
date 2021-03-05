import React from "react";
import { motion } from "framer-motion";
import { Hero } from "../components";

const Home = () => {
  return (
    <motion.div exit={{ opacity: 0 }}>
      <Hero />
    </motion.div>
  );
};

export default Home;
