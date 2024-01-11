import VPerson from "./v_person";

interface VStudent extends VPerson {
  contact_number: string;
  student_number: string;
  course: string;
  school: string;
  section: string;
}
export default VStudent;
