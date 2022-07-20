import * as types from './ActionType';
import axios from 'axios';

const getdataRequest = () => {
  return {
    type: types.GET_FRUITS_VEG_DATA_REQUEST,
  };
};
const getdataSuccess = (payload) => {
  //console.log('payload:', payload)
  return {
    type: types.GET_FRUITS_VEG_DATA_SUCCESS,
    payload,
  };
};
const getdataFailure = () => {
  return {
    type: types.GET_FRUITS_VEG_DATA_FAILURE,
  };
};





const getfruitsvegData = (payload) => (dispatch) => {
  dispatch(getdataRequest());
  return axios
    .get('http://localhost:5050/Fruits_Vegitables')
    .then((res) => {
      dispatch(getdataSuccess(res.data));
    })
    .catch((err) => {
      dispatch(getdataFailure(err.data));
    });
};



export { getfruitsvegData };
