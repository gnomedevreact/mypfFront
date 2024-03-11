import { Project } from "@/components/screens/Project/Project";
import { IProject } from "@/types/project.interface";

export const revalidate = 3600;

export async function generateStaticParams() {
  const res = await fetch(`http://localhost:7000/api/work/get-all`, {
    next: {
      revalidate: 3600,
    },
  });

  const projects: IProject[] = await res.json();
  const projectIds = projects.map((project) => project.id);

  return projectIds.map((id) => {
    return {
      id,
    };
  });
}

async function getWork(id: string) {
  const res = await fetch(`http://localhost:7000/api/work/by-id/${id}`);
  const work: IProject = await res.json();

  return work;
}

const ProjectPage = async ({ params }: { params: { id: string } }) => {
  const project = await getWork(params.id);

  return <Project project={project} />;
};

export default ProjectPage;
