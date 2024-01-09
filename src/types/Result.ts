import Module from "./Module";
import Student from "./Student";

type Result = {
  id: number;
  progress?: number;
  timer: number;
  total_score: number;
  items: number;
  average: number;
  created_at?: string;
  updated_at?: string;
  deleted_at?: string;
  module: Module;
  student: Student;
};
export default Result;
