const initialState = {
  items: [],
  email: null,
  token: null,
  id: null,
};

const app = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ITEMS":
      return {
        ...state,
        items: action.payload,
      };

    default:
      return state;
  }
};

export default app;
