import { Tool } from "./tool.model";

export interface Project {
  id: string;
  title: string;
  description: string;
  descriptionDetail: string; // 🆕 nouvelle propriété
  tools: Tool[];
  image: string;
}