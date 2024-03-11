import { twMerge as tw } from "tailwind-merge";

import styles from "./Container.module.scss";

interface IContainer {
  children: React.ReactNode;
  className?: string;
}

export const Container = ({ children, className }: IContainer) => {
  return <div className={tw(styles.container, className)}>{children}</div>;
};
