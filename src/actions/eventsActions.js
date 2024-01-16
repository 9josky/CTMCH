import { SET_EVENT, SET_EVENTS } from "./types";
const axios = require("axios");

//GET EVENTS FROM BACKEND SERVER
export const getEvents = history => dispatch => {
  axios
    .get("https://api.houseofdestiny.or.ke/events/get")
    .then(res => {
      if (res.status === 200) {
        dispatch({
          type: SET_EVENTS,
          payload: res.data
        });
      } else {
        history.push("/");
      }
    })
    .catch(err => {
      console.log(err);
    });
};

export const viewEvent = (name, history) => dispatch => {
  axios.get("https://api.houseofdestiny.or.ke/events/get").then(res => {
    dispatch({
      type: SET_EVENT,
      payload: search(name, res.data)
    });
    history.push("/event-single");
  });
};

const search = (nameKey, myArray) => {
  for (var i = 0; i < myArray.length; i++) {
    if (myArray[i].name === nameKey) {
      return myArray[i];
    }
  }
};
