const BACKEND = `${process.env.VUE_APP_BACKEND}/api/`;

export default {
  ANSWERS: {
    READ: `${BACKEND}teacher/answers/`,
  },

  AUDIT: {
    READ: `${BACKEND}teacher/audit`,
    SEARCH: `${BACKEND}teacher/audit/search`,
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
    MODULE: `${BACKEND}teacher/dashboard/modules`,
    RATIO: `${BACKEND}teacher/dashboard/ratio`,
    READ: `${BACKEND}teacher/dashboard`,
  },

  QUESTIONS: {
    READ: `${BACKEND}teacher/questions/`,
  },

  MODULES: {
    READ: `${BACKEND}teacher/modules`,
    SEARCH: `${BACKEND}teacher/modules/search`,
  },

  RESULTS: {
    READ: `${BACKEND}teacher/results`,
    SEARCH: `${BACKEND}teacher/results/search`,
    INVALIDATE: `${BACKEND}teacher/results/`,
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
    RESET: `${BACKEND}teacher/reset/`,
    UPDATE: `${BACKEND}teacher/students/`,
    DELETE: `${BACKEND}teacher/students/`,
    SEARCH: `${BACKEND}teacher/students/search`,
  },

  TEST: {
    SUBMIT: `${BACKEND}teacher/test/`,
  },
};
