const initialState = {
  items: [],
  email: null,
  token: null,
  id: null,
};

const workUser = (state = initialState, action) => {
  if (action.type === "SET_USER") {
    return {
      ...state,
      sortBy: action.payload,
    };
  }
};

export default workUser;
