import School from "./School";
import Person from "./Person";

type Teacher = Person & {
  school: number | string | School;
};

export default Teacher;
