"use client";

import photo from "/public/images/me.jpeg";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { twMerge as tw } from "tailwind-merge";

import { Svg } from "../Svg/Svg";
import { Text } from "../Text/Text";
import styles from "./SideBar.module.scss";

export const SideBar = () => {
  const path = usePathname();

  return (
    <aside className={styles.sidebar}>
      <div>
        <div>
          <Image src={photo} alt="my photo" />
        </div>
      </div>
      <ul className={styles.menu}>
        <Link href={"/"} className={tw(path === "/" && "bg-active")}>
          <Svg.Home isActive={true} />
        </Link>
        <Link href={"/about"} className={tw(path === "/about" && "bg-active")}>
          <Svg.About isActive={false} />
        </Link>
        <Link
          href={"/contact"}
          className={tw(path === "/contact" && "bg-active")}
        >
          <Svg.Mail isActive={false} />
        </Link>
      </ul>
    </aside>
  );
};
