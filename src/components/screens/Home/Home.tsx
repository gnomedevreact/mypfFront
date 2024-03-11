import { IProject } from "@/types/project.interface";

import { Intro } from "./components/Intro/Intro";
import { Works } from "./components/Works/Works";
import styles from "./Home.module.scss";

interface IHome {
  projects: IProject[];
}

export const Home = ({ projects }: IHome) => {
  return (
    <main className={styles.wrap}>
      <Intro />
      <Works projects={projects} />
    </main>
  );
};
