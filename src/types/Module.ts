import Question from "./Question";
import Subject from "./Subject";

type Module = {
  id: number;
  name: string;
  objective: string;
  description: string;
  direction: string;
  step: number | string | null | undefined;
  passing: number;
  count: number;
  active: boolean;
  created_at: string;
  updated_at: string;
  deleted_at: string;
  subject: number | Subject;
  questions?: Question[];
};
export default Module;
