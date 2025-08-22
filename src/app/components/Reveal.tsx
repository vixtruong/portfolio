"use client";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

type RevealProps = {
  children: React.ReactNode;
  delay?: number;
};

export default function Reveal({ children, delay = 0 }: RevealProps) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2, // bao nhiêu % element hiển thị thì chạy hiệu ứng
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
}
