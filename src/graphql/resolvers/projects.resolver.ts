import dbConnect from "@/lib/db";
import Project from "@/models/Projects.mo";

interface AddProjectInput {
  name: String;
  heroImage: String;
  overview: String;
  challenge: String;
  photos: [];
  details: [];
  url: String;
}

interface AddProjectArgs {
  input: AddProjectInput;
}

const ProjectResolver = {
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
