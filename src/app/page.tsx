import { Home } from "@/components/screens/Home/Home";
import { IProject } from "@/types/project.interface";

async function getProjects() {
  const res = await fetch(`https://mypfback.onrender.com/api/work/get-all`, {
    next: {
      revalidate: 3600,
    },
  });
  const projects: IProject[] = await res.json();

  return projects;
}

const HomePage = async () => {
  const projects = await getProjects();

  return <Home projects={projects} />;
};

export default HomePage;
