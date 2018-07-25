import { getInitialData } from "../utils/api";
// import { getUsers, getQuestions } from "../utils/api";


const AUTHED_ID = 'tylermcginnis'

export function handleInitialData () {
  return (dispatch) => {
    return getInitialData()
      .then(({ users, questions }) => {
        // dispatch(receiveUsers(users))
        // dispatch(receiveTweets(questions))
        // dispatch(setAuthedUser(AUTHED_ID))
      })
  }
}

// export function getInitialData() {
//   return Promise.all([_getUsers(), _getQuestions()]).then(
//     ([users, questions]) => ({
//       users,
//       questions
//     })
//   );
// }

// export function handleInitialData() {
//   return Promise.all([getUsers(), getQuestions()]).then(
//     ([users, questions]) => ({
//       users,
//       questions
//     })
//   );
// }
