import { twMerge as tw } from "tailwind-merge";

import styles from "../CodeArea.module.scss";

interface INaming {
  children: React.ReactNode;
  className?: string;
}

export const Naming = ({ children, className }: INaming) => {
  return <div className={tw(styles.naming, className)}>{children}</div>;
};
