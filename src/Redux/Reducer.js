import * as types from './ActionType';

const initState = {
  isLoading: false,
  isError: false,
  data: [],
};

const reducer = (state = initState, { type, payload }) => {


  switch (type) {
    case types.GET_FRUITS_VEG_DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case types.GET_FRUITS_VEG_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: payload,
      };

    case types.GET_FRUITS_VEG_DATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    default:
      return state;
  }
};

export { reducer };
