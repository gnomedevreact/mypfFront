import styles from "./Tag.module.scss";

export const Tag = ({ tag }: { tag: string }) => {
  return <div className={styles.tag}>{tag}</div>;
};
