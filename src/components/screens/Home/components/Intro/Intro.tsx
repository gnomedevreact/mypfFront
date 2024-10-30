import { Button } from '@/components/shared/Button/Button';
import { Container } from '@/components/shared/Container/Container';
import { AnimatedSection, Section } from '@/components/shared/Section/Section';
import { Svg } from '@/components/shared/Svg/Svg';
import { Text } from '@/components/shared/Text/Text';

import { Avaliable } from './Avaliable';
import styles from './Intro.module.scss';
import { FlipWords } from '@/components/ui/flip-words';

const WORDS = [
  'Experienced',
  'Skilled',
  'Proficient',
  'Expert',
  'Adept',
  'Seasoned',
  'Qualified',
  'Capable',
];

export const Intro = () => {
  return (
    <AnimatedSection>
      <Container className={styles.wrap}>
        <Avaliable />
        <div>
          <Text title>Hello! I'm Miron, &#128566;</Text>
          <Text title>
            Real Things. <FlipWords words={WORDS} /> <br /> Developer.
          </Text>
        </div>
        <Text className={styles.location}>
          <Svg.Geo />
          Hungary, Budapest
        </Text>
        <Text>
          Seasoned Full-Stack Developer proficient in an extensive arsenal of development
          tools across both frontend and backend technologies. Specializing in Next.js and
          NestJS, I excel in utilizing TypeScript, JavaScript, and various other
          frameworks to craft powerful and efficient web solutions. With a mastery of
          frontend and backend development, I bring versatility and expertise to deliver
          exceptional results.
        </Text>
        <Button path="/about" className={'max-w-[300px]'}>
          About
        </Button>
      </Container>
    </AnimatedSection>
  );
};
