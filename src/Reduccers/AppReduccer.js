export const actions = {
  loggingAdmin: "LOGGING_ADMIN",
  logoutAdmin: "LOGOUT_ADMIN",
};

export default function reducer(state, action) {
  switch (action.type) {
    case actions.loggingAdmin:
      return { isAdminLogged: true };
    case actions.logoutAdmin:
      console.log("eeee");

      return { isAdminLogged: false };
    default:
      throw new Error();
  }
}
