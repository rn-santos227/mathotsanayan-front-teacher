const BACKEND = `${process.env.VUE_APP_BACKEND}/api/`;

export default {
  AUTH: {
    AUTH: `${BACKEND}auth`,
    LOGIN: `${BACKEND}teacher`,
    LOGOUT: `${BACKEND}logout`,
    PASSWORD: `${BACKEND}password`,
    USER: `${BACKEND}user/2`,
  },

  DASHBOARD: {
    READ: `${BACKEND}teacher/dashboard`,
  },
};
