import { SkillItem } from "./skill-item.model";

export interface SkillGroup {
  title: string;
  icon: string;
  intro: string;
  items: SkillItem[];
}