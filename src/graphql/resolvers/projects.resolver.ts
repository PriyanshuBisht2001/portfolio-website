import dbConnect from "@/lib/db";
import Project from "@/models/Projects.mo";

interface AddProjectInput {
  name: string;
  heroImage: string;
  overview: string;
  challenge: string;
  photos: string[];
  details: string[];
  url: string;
}

interface AddProjectArgs {
  input: AddProjectInput;
}

const ProjectResolver = {
  Query: {
    projects: async () => {
      try {
        await dbConnect();
        const projects = await Project.find({});
        return projects;
      } catch (err) {
        console.error(err);
        throw new Error("Failed to fetch projects");
      }
    },
  },
  Mutation: {
    addProject: async (_parent: any, { input }: AddProjectArgs) => {
      try {
        await dbConnect();
        const project = await Project.create(input);
        return project;
      } catch (err) {
        console.error("Add Project Error:", err);

        if (err instanceof Error) {
          throw new Error(err.message);
        }
        throw new Error("Failed to Add Project");
      }
    },
  },
};

export default ProjectResolver;
