import React from "react";
import { motion } from "framer-motion";
import { Title } from "../components";

const ScenicSpot = () => {
  return (
    <motion.div exit={{ opacity: 0 }}>
      <Title heading="縣市景點" />
      景點頁
    </motion.div>
  );
};

export default ScenicSpot;
