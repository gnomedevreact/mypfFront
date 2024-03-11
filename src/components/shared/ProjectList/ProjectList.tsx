import Image from "next/image";
import Link from "next/link";

import { IProject } from "@/types/project.interface";

import { Text } from "../Text/Text";
import styles from "./ProjectList.module.scss";

interface IProjectList {
  projects: IProject[];
}

export const ProjectList = ({ projects }: IProjectList) => {
  return (
    <div className={styles.wrap}>
      {projects.map((project) => {
        return (
          <Link href={`/project/${project.id}`} key={project.id}>
            <div>
              <img src={project.images[0]} alt={project.name} />
            </div>
            <Text>{project.name}</Text>
          </Link>
        );
      })}
    </div>
  );
};
