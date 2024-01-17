import School from "./School";
import Student from "./Student";

type Section = {
  id?: number;
  name: string;
  description: string;
  created_at?: string;
  updated_at?: string;
  deleted_at?: string;
  school: number | string | School;
  students?: Student[];
};

export default Section;
