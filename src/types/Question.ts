import Subject from "./Subject";
import Module from "./Module";

type Question = {
  id: number;
  content: string;
  type: string;
  file: File | null;
  created_at: string;
  updated_at: string;
  deleted_at: string;
  module: number | Module;
  subject: number | Subject;
};

export default Question;
