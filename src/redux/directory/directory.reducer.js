import SECTIONS_DATA from './directory.data';

const INITIAL_STATE = { sections: SECTIONS_DATA };

export const directoryReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    default:
      return state;
  }
};
