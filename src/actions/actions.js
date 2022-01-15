export const login = (userData) => (dispatch) => {
  dispatch({
    type: "LOGIN",
    payload: userData,
  });
};

export const logout = () => (dispatch) => {
  dispatch({
    type: "LOGOUT",
    payload: null,
  });
};
