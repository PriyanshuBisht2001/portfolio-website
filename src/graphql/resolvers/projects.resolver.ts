import dbConnect from "@/lib/db";
import Project from "@/models/Projects.mo";
import { verifyAdmin } from "@/utils/auth.ut";

interface AddProjectInput {
  id: string;
  name: string;
  heroImage: string;
  overview: string;
  challenge: string;
  photos: string[];
  details: string[];
  url: string;
}

interface ProjectArgs {
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
    project: async (_parent: any, { id }: { id: string }) => {
      try {
        await dbConnect();
        const project = await Project.findById(id);
        return project;
      } catch (error) {
        throw new Error("Failed to Fetch Project");
      }
    },
  },
  Mutation: {
    addProject: async (
      _parent: any,
      { input }: ProjectArgs,
      context: { token: string },
    ) => {
      try {
        await verifyAdmin(context.token);
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

    deleteProject: async (_: any, { id }: any, context: any) => {
      try {
        await verifyAdmin(context.token);
        await dbConnect();
        const result = await Project.deleteOne({ _id: id });
        return result.deletedCount === 1;
      } catch (err) {
        console.error("Project Deleting Error:", err);

        if (err instanceof Error) {
          throw new Error(err.message);
        }
        throw new Error("Failed to Delete Project");
      }
    },

    updateProject: async (
      _parent: any,
      { input }: ProjectArgs,
      context: { token: string },
    ) => {
      try {
        await verifyAdmin(context.token);
        await dbConnect();
        const result = await Project.findOneAndUpdate(
          { _id: input.id },
          {
            $set: { ...input },
          },
          {
            new: true,
          },
        );
        return result;
      } catch (err) {
        console.error("Update Project Error:", err);

        if (err instanceof Error) {
          throw new Error(err.message);
        }
        throw new Error("Failed to Update Project");
      }
    },
  },
};

export default ProjectResolver;
