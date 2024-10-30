'use client';

import Image from 'next/image';
import Link from 'next/link';

import { IProject } from '@/types/project.interface';

import { Text } from '../Text/Text';
import styles from './ProjectList.module.scss';
import React from 'react';
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card';

interface IProjectList {
  projects: IProject[];
}

export const ProjectList = ({ projects }: IProjectList) => {
  return (
    <div className={styles.wrap}>
      {projects.map((project) => {
        return (
          <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-neutral-200/[0.1] dark:bg-gray dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                {project.name}
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src={project.images[0]}
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
              <div className="flex justify-between items-center mt-20">
                <CardItem
                  translateZ={20}
                  as={Link}
                  href={`/project/${project.id}`}
                  target="__blank"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                  Read more →
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        );
      })}
    </div>
  );
};
