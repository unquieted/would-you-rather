import { getInitialData } from "../utils/api"

export function getInitialData () {
  return Promise.all([
    _getUsers(),
    _getQuestions(),
  ]).then(([users, tweets]) => ({
    users,
    questions,
  }))
}

export function saveQuestion (info) {
  return _saveQuestion (info)
}

export function saveQuestionAnswer (info) {
  return _saveQuestionAnswer (info)
}
