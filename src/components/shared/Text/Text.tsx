import { twMerge as tw } from "tailwind-merge";

import styles from "./Text.module.scss";

interface IText {
  children: React.ReactNode;
  title?: boolean;
  className?: string;
}

export const Text = ({ children, title = false, className }: IText) => {
  if (title) {
    return (
      <h1 className={tw("text-base text-white", className)}>{children}</h1>
    );
  }

  return <p className={tw("text-base text-white", className)}>{children}</p>;
};
