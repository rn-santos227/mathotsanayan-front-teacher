import Grade from "./Grade";
import Module from "./Module";
import Question from "./Question";
import Student from "./Student";

type Answer = {
  id?: number;
  content: string;
  timer?: number;
  attempts?: number;
  created_at?: string;
  updated_at?: string;
  deleted_at?: string;
  module?: number | Module;
  question?: number | Question;
  student?: number | Student;
  grade?: Grade;
};
export default Answer;
