import { CodeArea } from "@/components/shared/CodeArea/CodeArea";

import styles from "./About.module.scss";
import { Intro } from "./components/Intro/Intro";
import { Tools } from "./components/Tools/Tools";

export const About = () => {
  return (
    <main className={styles.wrap}>
      <Intro />
      <Tools />
      <CodeArea />
    </main>
  );
};
