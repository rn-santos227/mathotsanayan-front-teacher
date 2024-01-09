type Course = {
  id?: number;
  name: string;
  abbreviation: string;
  description: string | null;
  created_at?: string;
  updated_at?: string;
  deleted_at?: string;
};
export default Course;
