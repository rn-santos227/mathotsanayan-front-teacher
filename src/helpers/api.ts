const BACKEND = `${process.env.VUE_APP_BACKEND}/api/`;

export default {
  ANSWERS: {
    READ: `${BACKEND}teacher/answers/`,
  },

  AUTH: {
    AUTH: `${BACKEND}auth`,
    LOGIN: `${BACKEND}teacher/login`,
    LOGOUT: `${BACKEND}logout`,
    PASSWORD: `${BACKEND}password`,
    USER: `${BACKEND}teacher/user`,
  },

  COURSES: {
    CREATE: `${BACKEND}teacher/courses/create`,
    READ: `${BACKEND}teacher/courses`,
    UPDATE: `${BACKEND}teacher/courses/`,
    DELETE: `${BACKEND}teacher/courses/`,
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
    CREATE: `${BACKEND}teacher/schools/create`,
    READ: `${BACKEND}teacher/schools`,
    UPDATE: `${BACKEND}teacher/schools/`,
    DELETE: `${BACKEND}teacher/schools/`,
  },

  SECTIONS: {
    CREATE: `${BACKEND}teacher/sections/create`,
    READ: `${BACKEND}teacher/sections`,
    UPDATE: `${BACKEND}teacher/sections/`,
    DELETE: `${BACKEND}teacher/sections/`,
  },

  STUDENTS: {
    CREATE: `${BACKEND}teacher/students/create`,
    READ: `${BACKEND}teacher/students`,
    UPDATE: `${BACKEND}teacher/students/`,
    DELETE: `${BACKEND}teacher/students/`,
    SEARCH: `${BACKEND}teacher/students/search`,
  },
};
