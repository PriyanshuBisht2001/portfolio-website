import { Schema, model, models } from "mongoose";

const ProjectSchema = new Schema({
  name: { type: String, required: true },
  heroImage: String,
  overview: String,
  challenge: String,
  photos: [String],
  details: [String],
  url: String,
});

const Project = models.Project || model("Project", ProjectSchema);

export default Project;
