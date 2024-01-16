const axios = require("axios");
export const sendEmail = (emailData) => (dispatch) => {
  return axios.post("http://127.0.0.1:5002/email/send", emailData).then((res) => {
    return res.data;
  });
};
