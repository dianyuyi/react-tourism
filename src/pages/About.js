import React from "react";
import { motion } from "framer-motion";
import { Title } from "../components";

const About = () => {
  return (
    <motion.div exit={{ opacity: 0 }}>
      <Title heading="網站相關" />
      相關說明
    </motion.div>
  );
};

export default About;
