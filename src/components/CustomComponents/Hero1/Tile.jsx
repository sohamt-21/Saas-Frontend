import React from "react";
import { motion } from "framer-motion";

function Tile() {
  return (
    <motion.div
      className="aspect-square rounded-xl border border-zinc-100 -skew-y-6 transition-colors hover:bg-cyan-200 "
    />
  );
}

export default Tile;
