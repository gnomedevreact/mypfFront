import Image from "next/image";

import { Button } from "@/components/shared/Button/Button";
import { Container } from "@/components/shared/Container/Container";
import { AnimatedSection, Section } from "@/components/shared/Section/Section";
import { IProject } from "@/types/project.interface";

import { Heading } from "./components/Heading/Heading";
import { Images } from "./components/Images/Images";
import { Tag } from "./components/Tag/Tag";
import styles from "./Project.module.scss";

export const Project = ({ project }: { project: IProject }) => {
  return (
    <main className={styles.main}>
      <Section>
        <Container className={styles.wrap}>
          <div className={"pb-6 border-b border-brightGray"}>
            <Button className="w-fit p-1 bg-transparent" path="/">
              {"<- Home"}
            </Button>
          </div>
          <div className={"flex items-center gap-2 flex-wrap"}>
            {project.tags.map((tag, index) => {
              return <Tag tag={tag} key={index} />;
            })}
          </div>
          <Heading name={project.name} goal={project.goal} />
          <Images images={project.images} />
          <Heading name="Conclusion" goal={project.conclusion} />
        </Container>
      </Section>
    </main>
  );
};
