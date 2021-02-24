import React from "react";
import { motion } from "framer-motion";
import { Title, SpotList } from "../components";
// import { useGlobalContext } from "../context";

const ScenicSpot = () => {
  // const { cityName } = useGlobalContext();

  return (
    <motion.div exit={{ opacity: 0 }}>
      <SpotList />
    </motion.div>
  );
};

export default ScenicSpot;
