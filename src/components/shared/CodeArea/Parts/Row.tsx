import { twMerge as tw } from "tailwind-merge";

import styles from "../CodeArea.module.scss";

interface IRow {
  children?: React.ReactNode;
  className?: string;
}

export const Row = ({ className, children }: IRow) => {
  return <div className={tw(styles.row, className)}>{children}</div>;
};
