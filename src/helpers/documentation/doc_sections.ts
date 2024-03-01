const docs: string[] = [
  `This serves as a database that stores information about the students’
  section and the number of students per section. It authorizes teachers
  with a user-friendly interface to efficiently create, update, and delete
  sections.`,

  `This functionality allows teachers to create or add new sections to the
  database. It involves providing information such as student’s section,
  school, and section description.`,

  `This functionality enables teachers to modify existing section details
  stored in the database. For example, they might need to update the
  student’s section, school, and section description.`,

  `This functionality permits teachers to remove sections from the
  database. Given the potential impact of deletion, particularly if
  performed inadvertently, this action necessitates confirmation or
  verification to guarantee its deliberate execution. This typically
  entails displaying a pop-up dialog prompting the teacher to affirm their
  intention to delete the section. Upon confirmation, the record
  corresponding to the section is eliminated from the Sections Manager,
  and any linked data may be subject to deletion or modification based on
  the configuration of the database.`,
];

export default docs;
