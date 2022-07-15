import {ADD_MESSAGE, WRITE_MESSAGE} from "../actions";

const initialState = {
  messages: [
    {id:0, content:'Petit essai',author:'Testeur 1'},
    {id:1, content:'Deuxième essai',author:'Testeur 2'}
  ],
  currentMessage: '',
};
function reducer(state = initialState, action = {}) {
  switch (action.type) {

    case WRITE_MESSAGE:
      return {
        ...state,
        currentMessage: action.message
      };

    case ADD_MESSAGE:
      return {
        ...state,
        messages: [...state.messages,action.currentMessage]
      };

    default:
      return state;
  }
}

export default reducer;

/*
import {createReducer} from "@reduxjs/toolkit/src/createReducer";
import {createAction} from "@reduxjs/toolkit/src/createAction";

const addMessage = createAction('addMessage')
*/
/*const messageReducer = createReducer(initialState, builder => {
  builder
    .addCase(addMessage, (state, action) => {

    })
}*/
