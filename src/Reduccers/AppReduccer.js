export const initialState = {
  dataAdmin: null,
  isAdminLogged: false,
};

export const actions = {
  loggingAdmin: "LOGGING_ADMIN",
  logoutAdmin: "LOGOUT_ADMIN",
  fetchDataAdmin: "FETCH_DATA",
};

export default function reducer(state, action) {
  switch (action.type) {
    case actions.loggingAdmin:
      return { ...state, isAdminLogged: true };
    case actions.logoutAdmin:
      return { ...state, dataAdmin: null, isAdminLogged: false };
    case actions.fetchDataAdmin:
      return { ...state, dataAdmin: action.payload };
    default:
      throw new Error();
  }
}
