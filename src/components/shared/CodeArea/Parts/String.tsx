import { twMerge as tw } from "tailwind-merge";

import styles from "../CodeArea.module.scss";

interface IString {
  children: React.ReactNode;
  className?: string;
}

export const String = ({ children, className }: IString) => {
  return <div className={tw(styles.string, className)}>{children}</div>;
};
