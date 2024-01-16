import { SET_MINISTRIES, SET_MINISTRY } from "./types";
const ministriesData = [
  {
    name: "CHILDREN MINISTRY",
    image: "five.jpg",
    preview:
      "The children sanctuary has many children gathering to worship every Sunday. The service runs concurrently with the main service.",
    detail:
      "The children sanctuary has many children gathering to worship every Sunday. The service runs concurrently with the main service. The children are ministered to with music, dance, prayer and creative learning of the Word of God. The children have been grouped into four different classes where they are taught according to their ages. The groups are Angels (1 – 3 yrs.), Joyous (4 – 7yrs.), Eagles (8 – 10yrs.) and Pre teens (11 – 12yrs.)"
  },
  {
    name: "YOUTH MINISTRY",
    image: "four.jpg",
    preview:
      "The House of Destiny youth have been categorized in different groups as per different stages in life. This includes the high school students..",
    detail:
      "The House of Destiny youth have been categorized in different groups as per different stages in life. This includes the high school students, college students and young adults. The aim of the youth ministry is to attract, retain and equip the youth to be effective agents of transformation in their spheres of life. This is achieved through various programs targeting the young people. Youth Connect is an event held every Thursday from 6pm to 8pm. It is a forum to meet, greet, exchange and implement ideas. The high school students also have a mentorship program every school program where they are equipped with skills to prepare them for the next phase of their life. The youth ministry also organizes events such as concerts, dinners, movie nights, pizza nights and outings among others that give the youth a conducive environment for connecting and discovering who they are and their God given purpose in life."
  },
  {
    name: "FAMILY MINISTRY",
    image: "seventeen.jpg",
    preview:
      "Passionate to strengthen marriages and family as a pillar in the community, the ministry organizes for events and activities such as couple’s dinners...",
    detail:
      "Passionate to strengthen marriages and family as a pillar in the community, the ministry organizes for events and activities such as couple’s dinners, parenting classes, counseling sessions, camps and the like. Young adults are also encouraged to date and court in the right way as they are prepared for marriage."
  },
  {
    name: "MEN MINISTRY",
    image: "twelve.jpg",
    preview:
      "The men ministry encourages good stewardship as they bring men together to undertake projects towards accomplishing set goals.",
    detail:
      "The men ministry encourages good stewardship as they bring men together to undertake projects towards accomplishing set goals. They meet for various activities such as goat eating and workshops even as they mentor young men."
  },
  {
    name: "WOMEN MINISTRY",
    image: "eighteen.jpg",
    preview:
      "The Destiny Pearls, as the House of Destiny women are referred to, are geared towards igniting the hearts of women for Christ.",
    detail:
      "The Destiny Pearls, as the House of Destiny women are referred to, are geared towards igniting the hearts of women for Christ. They develop programs and activities that resolve issues and circumstances affecting different areas of their lives to ensure the growth of each woman in the ministry."
  }
];

//Set ministries to state
export const setMinistries = history => dispatch => {
  dispatch({
    type: SET_MINISTRIES,
    payload: ministriesData
  });
};

//View single ministry info
export const viewMinistry = (name, history) => dispatch => {
  dispatch({
    type: SET_MINISTRY,
    payload: search(name, ministriesData)
  });
  history.push("/single-ministry");
};

const search = (nameKey, myArray) => {
  for (var i = 0; i < myArray.length; i++) {
    if (myArray[i].name === nameKey) {
      return myArray[i];
    }
  }
};
