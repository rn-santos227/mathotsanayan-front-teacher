import Subject from "./Subject";
import Module from "./Module";
import Option from "./Option";
import Correct from "./Correct";

type Question = {
  id: number;
  content: string;
  type: string;
  file: File | null;
  created_at: string;
  updated_at: string;
  deleted_at: string;
  options: Option[];
  corrects: Correct[];
  module: number | Module;
  subject: number | Subject;
};

export default Question;
