const initialState = {
  listHistory: [],
};

const history = (state = initialState, action) => {
  switch (action.type) {
    case 'GETHISTORY_FULFILLED': {
      console.log('FULLFILEDa sdd =>', action.payload.data.data);
      return {
        ...state,
        listHistory: action.payload.data.data,
      };
    }
    case 'GETHISTORY_REJECTED': {
      console.log('REJECTED =>', action);
      return {
        ...state,
        listHistory: [],
      };
    }
    default: {
      return state;
    }
  }
};
export default history;
