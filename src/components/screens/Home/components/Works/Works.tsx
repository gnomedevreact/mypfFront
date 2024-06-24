import Link from "next/link";

import { Container } from "@/components/shared/Container/Container";
import { ProjectList } from "@/components/shared/ProjectList/ProjectList";
import { AnimatedSection } from "@/components/shared/Section/Section";
import { Text } from "@/components/shared/Text/Text";
import { IProject } from "@/types/project.interface";

import styles from "./Works.module.scss";

interface IWorks {
  projects: IProject[];
}

export const Works = ({ projects }: IWorks) => {
  return (
    <AnimatedSection opacity={0.5}>
      <Container className={styles.wrap}>
        <Text title>Work examples 💼</Text>
        <ProjectList projects={projects} />
        <Text>
          You can check all my works on{" "}
          <Link
            href={
              "https://www.upwork.com/freelancers/~0116aad6ace738303c?viewMode=1"
            }
          >
            Kwork
          </Link>{" "}
          or <Link href={"https://kwork.ru/user/mironbrinkovskiy"}>UpWork</Link>
        </Text>
      </Container>
    </AnimatedSection>
  );
};
