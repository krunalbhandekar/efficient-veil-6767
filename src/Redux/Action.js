import * as types from './ActionType';

const getfruitsvegData = (payload) => (dispatch) => {
  dispatch({ type: types.GET_FRUITS_VEG_DATA_REQUEST });
  return axios.get('http://localhost:8080/Fruits_Vegitables').then((res) => {
    dispatch({
      type: types.GET_FRUITS_VEG_DATA_SUCCESS,
      payload: res.data,
    }).catch((err) => {
      dispatch({ type: types.GET_FRUITS_VEG_DATA_FAILURE, payload: err });
    });
  });
};

export { getfruitsvegData };
