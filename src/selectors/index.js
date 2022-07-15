function getNextMessageID(state) {
  let id = 1;
  if (state.messages.length > 0) {
    id = Math.max(...state.messages.map(message => message.id)) + 1
  }
  return id;
}

export { getNextMessageID };
