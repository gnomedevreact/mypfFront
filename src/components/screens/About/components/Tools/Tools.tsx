import error from "/public/images/error.gif";
import Image from "next/image";

import { Container } from "@/components/shared/Container/Container";
import { Section } from "@/components/shared/Section/Section";
import { Text } from "@/components/shared/Text/Text";

import styles from "./Tools.module.scss";

export const Tools = () => {
  return (
    <Section>
      <Container className={styles.wrap}>
        <Text title>Services&Tools</Text>
        <ul>
          <li>Front-end developer</li>
          <li>Back-end developer</li>
          <li>Next.Js</li>
          <li>NestJs</li>
          <li>TypeScript</li>
          <li>NodeJS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>React Native</li>
          <li>PostgreSQL</li>
          <li>MongoDB</li>
          <li>SAAS</li>
        </ul>
      </Container>
    </Section>
  );
};
