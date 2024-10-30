import Link from 'next/link';

import { Container } from '@/components/shared/Container/Container';
import { ProjectList } from '@/components/shared/ProjectList/ProjectList';
import { AnimatedSection } from '@/components/shared/Section/Section';
import { Text } from '@/components/shared/Text/Text';
import { IProject } from '@/types/project.interface';

import styles from './Works.module.scss';

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
          You can check all my works on{' '}
          <Link target="_blank" href={'https://kwork.ru/user/mironbrinkovskiy'}>
            Kwork
          </Link>{' '}
          or{' '}
          <Link target="_blank" href={'https://www.fl.ru/users/mbrinkovskij/portfolio/'}>
            FLru
          </Link>
        </Text>
      </Container>
    </AnimatedSection>
  );
};
