import School from "./School";
import Teacher from "./Teacher";

type Section = {
  id?: number;
  name: string;
  description: string;
  created_at?: string;
  updated_at?: string;
  deleted_at?: string;
  school: number | string | School;
  teacher?: Teacher;
};

export default Section;
