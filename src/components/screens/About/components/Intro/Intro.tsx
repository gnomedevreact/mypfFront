import { Container } from '@/components/shared/Container/Container';
import { AnimatedSection } from '@/components/shared/Section/Section';
import { Text } from '@/components/shared/Text/Text';

import styles from './Intro.module.scss';
import { WavyBackground } from '@/components/ui/wavy-bg';

export const Intro = () => {
  return (
    <AnimatedSection>
      <Container className={styles.wrap}>
        <Text title className={styles.title}>
          Miron Brinkovskii
        </Text>
        <Text className={styles.text}>
          Hey there, I'm Miron - a seasoned front-end developer on a quest to redefine the
          digital landscape. Armed with extensive experience and a toolkit filled with
          cutting-edge technologies like NextJs and NestJs, I craft unique and immersive
          web solutions. Join me on this journey where innovation meets expertise.
        </Text>
        <Text className={styles.text}>
          While I navigate the digital realm, my commitment extends beyond lines of code.
          I thrive on transforming ideas into captivating web experiences, ensuring each
          project reflects a perfect blend of creativity and technical precision. Let's
          not just build websites; let's create digital masterpieces that leave a lasting
          impact.
        </Text>
      </Container>
    </AnimatedSection>
  );
};
