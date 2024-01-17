const BACKEND = `${process.env.VUE_APP_BACKEND}/api/`;

export default {
  ANSWERS: {
    READ: `${BACKEND}answers/`,
  },

  AUTH: {
    AUTH: `${BACKEND}auth`,
    LOGIN: `${BACKEND}teacher/login`,
    LOGOUT: `${BACKEND}logout`,
    PASSWORD: `${BACKEND}password`,
    USER: `${BACKEND}teacher/user`,
  },

  COURSES: {
    CREATE: `${BACKEND}teachers/courses/create`,
    READ: `${BACKEND}teachers/courses`,
    UPDATE: `${BACKEND}teachers/courses/`,
    DELETE: `${BACKEND}teachers/courses/`,
  },

  DASHBOARD: {
    READ: `${BACKEND}teacher/dashboard`,
  },

  RESULTS: {
    READ: `${BACKEND}teacher/results`,
    SEARCH: `${BACKEND}teacher/results/search`,
    INVALIDATE: `${BACKEND}teacher/results/`,
  },

  SCHOOLS: {
    CREATE: `${BACKEND}teachers/schools/create`,
    READ: `${BACKEND}teachers/schools`,
    UPDATE: `${BACKEND}teachers/schools/`,
    DELETE: `${BACKEND}teachers/schools/`,
  },

  SECTIONS: {
    CREATE: `${BACKEND}teachers/sections/create`,
    READ: `${BACKEND}teachers/sections`,
    UPDATE: `${BACKEND}teachers/sections/`,
    DELETE: `${BACKEND}teachers/sections/`,
  },

  STUDENTS: {
    CREATE: `${BACKEND}teachers/students/create`,
    READ: `${BACKEND}teachers/students`,
    UPDATE: `${BACKEND}teachers/students/`,
    DELETE: `${BACKEND}teachers/students/`,
    SEARCH: `${BACKEND}teachers/students/search`,
  },
};
