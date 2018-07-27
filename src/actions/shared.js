import { getInitialData } from "../utils/api";
import { getUsers, getQuestions } from "../utils/api";


const AUTHED_ID = 'tylermcginnis'

export function handleInitialData () {
  return (dispatch) => {
    return getInitialData()
      .then(({ users, questions }) => {
         dispatch(getUsers(users))
        // dispatch(receiveTweets(questions))
        // dispatch(setAuthedUser(AUTHED_ID))
      })
  }
}
