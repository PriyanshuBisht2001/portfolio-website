export type ProjectFieldTypes = {
  id: string;
  name: string;
  heroImage: string;
  overview: string;
  challenge: string;
  photos: string[];
  details: string[];
  url: string;
};

export enum ProjectType {
  PROJECT = "project",
}

export enum RevalidateTags {
  PROJECTS = "projects",
  SINGLEPROJECTS = "singleProjects",
}
