import * as t from '../types.js';

const initialState = {
  latitude: null,
  longitude: null,
};

const locReducer = (state = initialState, action) => {
  switch (action.type) {
    case t.GET_LOCATION:
      //   console.log(action.payload);
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default locReducer;
