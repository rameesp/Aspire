import * as actions from '../actions/actions';
import axios from 'axios';
import {AppDispatch} from '../configureStore';
import {httpMethods} from '../enum';
import { BASE_URL } from '../../resources/constants';

interface IPayLoadType {
  method: httpMethods;
  url: string;
  onStart: string;
  onSuccess: string;
  onError: string;
}

let dummyData: {
  card_num: ['1234', '5678', '0000', '5000'];
  cvv: '858';
  dateThru: '09/29';
  name: 'Ramees P';
}; // only for task purpose

const makeRequest = async (dispatch: AppDispatch, payload: IPayLoadType) => {
  let {method, url, onStart, onSuccess, onError} = payload;
  try {
    let request = {
      method: method,
      url: url,
      baseURL: BASE_URL,
    };
    dispatch({type: onStart, payload: []}); // before requesting for api it will  dispatch onStart which we can listen on the entities with payload []
    let response = await axios.request(request);
    dispatch({
      type: onSuccess,
      payload: response.data ? response.data : dummyData, // dummy data is only for task purpose 
    }); //after a successful request we can dispatch onSuccess with payload as response data
  } catch (ex) {
    dispatch({type: onError, payload: ex}); // incase any error happens we will dispatch onError with error message
  }
};

const axiosMiddleware =
  (
    {dispatch}: {dispatch: any}, //dispatch, getState
  ) =>
  (next: any) =>
  async (action: any) => {
    if (action.type != actions.apiCallBegan.type) return next(action);
    makeRequest(dispatch, action.payload);
  };

export default axiosMiddleware;
