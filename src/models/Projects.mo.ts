import { Schema, model, models } from "mongoose";

const ProjectSchema = new Schema({
  name: { type: String, required: true },
  heroImage: String,
  overview: String,
  challenges: [
    {
      challenge: { type: String, required: true },
      solution: { type: String, required: true },
    },
  ],
  photos: [String],
  details: [String],
  url: String,
});

const Project = models.Project || model("Project", ProjectSchema);

export default Project;
