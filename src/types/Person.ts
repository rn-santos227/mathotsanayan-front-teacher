import Password from "@/interfaces/Password";

type Person = Password & {
  id?: number;
  full_name?: string;
  first_name: string;
  middle_name: string;
  last_name: string;
  suffix: string;
  email: string;
  contact_number: string;
  created_at?: string;
  updated_at?: string;
  deleted_at?: string;
};

export default Person;
