import VPassword from "./v_password";

interface VPerson extends VPassword {
  first_name: string;
  middle_name: string;
  last_name: string;
  suffix: string;
  email: string;
}
export default VPerson;
