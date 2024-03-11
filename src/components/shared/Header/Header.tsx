"use client";

import photo from "/public/images/me.jpeg";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

import { Text } from "../Text/Text";
import styles from "./Header.module.scss";
import { Menu } from "./Menu/Menu";

const variants1 = {
  rotate: { rotate: "45deg", y: 3 },
  initial: { rotate: "0" },
};

const variants2 = {
  rotate: { rotate: "-45deg", y: -4 },
  initial: { rotate: "0" },
};

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className={styles.header}>
        <div>
          <div>
            <Image src={photo} alt="my photo" />
          </div>
          <div>
            <Text>BRINKOVSKII.M</Text>
            <Text>Software Engineer</Text>
          </div>
        </div>
        <div onClick={() => setIsOpen(!isOpen)}>
          <motion.div
            variants={variants1}
            animate={isOpen ? "rotate" : "initial"}
          ></motion.div>
          <motion.div
            variants={variants2}
            animate={isOpen ? "rotate" : "initial"}
          ></motion.div>
          <motion.div
            animate={isOpen ? { display: "none" } : { display: "block" }}
          ></motion.div>
        </div>
      </header>
      <AnimatePresence>{isOpen && <Menu />}</AnimatePresence>
    </>
  );
};
