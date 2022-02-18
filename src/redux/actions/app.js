import axios from "axios";

export const fetchItems = () => (dispatch) => {
  async function getData() {
    await axios.get(`http://localhost:3000/app`).then(({ data }) => {
      dispatch(setItems(data));
    });
  }

  getData();
};

export const setItems = (items) => ({
  type: "SET_ITEMS",
  payload: items,
});
