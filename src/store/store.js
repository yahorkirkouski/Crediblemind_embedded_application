import React, { createContext, useReducer, useContext } from 'react';

const initialState = {};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_ANSWER':
      return {
        ...state,
        [action.payload.questionName]: {value: action.payload.answer, type: action.payload.type},
      };
    default:
      return state;
  }
};

const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);
