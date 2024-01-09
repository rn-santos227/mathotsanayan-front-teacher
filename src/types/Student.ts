import Course from "./Course";
import School from "./School";
import Section from "./Section";
import Person from "./Person";

type Student = Person & {
  student_number: string;
  course: number | string | Course;
  school: number | string | School;
  section: number | string | Section;
};

export default Student;
