const docs: string[] = [
  `This serves as a database that stores information about the courses of
  students. It authorizes teachers with a user-friendly interface to
  efficiently create, update, and delete courses.`,

  `This functionality allows teachers to create or add new courses to the
  database. It involves providing information such as the course title,
  course abbreviation, and course description.`,

  `This functionality enables teachers to modify existing course details
  stored in the database. For example, they might need to update the
  course title, abbreviation, or description.`,

  `This functionality permits teachers to remove courses from the database.
  Since deletion can have significant consequences, especially if done
  accidentally, this action often requires confirmation or verification to
  ensure that the deletion is intentional. Confirmation involves a pop-up
  dialog asking the teacher to confirm their intention to delete the
  course. Once confirmed, the record representing the course is removed
  from the Courses Manager, and associated data (if any) might also be
  deleted or updated accordingly, depending on the database's
  configuration.`,
];

export default docs;
