type Audit = {
  id: number;
  activity: string;
  table: string;
  content: string;
  ip_address: string;
  created_at: string;
};

export default Audit;
