import {
  _getUsers,
  // generateUID,
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer,
  // formatQuestion
} from "./_DATA.js";

export function getInitialData() {
  return Promise.all([_getUsers(), _getQuestions()]).then(
    ([users, questions]) => ({
      users,
      questions
    })
  );
}

// User API Functions

export function getUsers() {
  return _getUsers();
}

// Question API Functions

export function saveQuestion(info) {
  return _saveQuestion(info);
}

export function saveQuestionAnswer(info) {
  return _saveQuestionAnswer(info);
}
