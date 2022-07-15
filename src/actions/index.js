export const ADD_MESSAGE = 'ADD_MESSAGE';
export const WRITE_MESSAGE = 'UPDATE_MESSAGE';

export const addMessage = (currentMessage) => ({
  type: ADD_MESSAGE,
  messages: [...currentMessage]
})

export const writeMessage = (message) => ({
  type: WRITE_MESSAGE,
  message,
})
