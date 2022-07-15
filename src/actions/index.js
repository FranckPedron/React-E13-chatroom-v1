export const WRITE_MESSAGE = 'UPDATE_MESSAGE';

export const writeMessage = (message) => ({
  type: WRITE_MESSAGE,
  message,
})

export const ADD_MESSAGE = 'ADD_MESSAGE';

export const addMessage = () => ({
  type: ADD_MESSAGE
})


