"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { twMerge as tw } from "tailwind-merge";

import { Svg } from "../../Svg/Svg";
import { Text } from "../../Text/Text";
import styles from "./Menu.module.scss";

export const Menu = () => {
  const path = usePathname();

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <ul className={styles.menu}>
        <Link href={"/"} className={tw(path === "/" && "bg-active")}>
          <Svg.Home isActive={true} />
          <Text>Homepage</Text>
        </Link>
        <Link href={"/about"} className={tw(path === "/about" && "bg-active")}>
          <Svg.About isActive={false} />
          <Text>About me</Text>
        </Link>
        <Link
          href={"/contact"}
          className={tw(path === "/contact" && "bg-active")}
        >
          <Svg.Mail isActive={false} />
          <Text>Contact me</Text>
        </Link>
      </ul>
    </motion.nav>
  );
};
