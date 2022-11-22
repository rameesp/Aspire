import {apiCallBegan} from '../actions/actions';
import {createSelector, createSlice} from '@reduxjs/toolkit';
import {httpMethods} from '../enum';
import {AppDispatch, RootState} from '../configureStore';

interface UserProps {
  name: string;
  cardNumber: string[];
  cvv: string;
  dateThru: string;
}
const slice = createSlice({
  name: 'userDetails',
  initialState: <UserProps>{
    name: '',
    cardNumber: [],
    cvv: '',
    dateThru: '',
  },
  reducers: {
    getApiCallStart: (action, payload) => {
    },
    getApiCallSuccess: (action, payload) => {
      const {card_num, cvv, dateThru, name} = payload.payload;
      action.name = name;
      action.cardNumber = card_num;
      action.cvv = cvv;
      action.dateThru = dateThru;
    },
    getApiCallFailed: (action, payload) => {
    },
  },
});
const {getApiCallSuccess, getApiCallStart, getApiCallFailed} = slice.actions;

export default slice.reducer;

export const getUserDetails =
  () => (dispatch: AppDispatch) => {
    let payload = {
      url: `v1/e16dce45-5a84-481e-84e5-d373c8949664`,
      method: httpMethods.GET,
      onStart: getApiCallStart.type,
      onSuccess: getApiCallSuccess.type,
      onError: getApiCallFailed.type,
    };
    return dispatch({type: apiCallBegan.type, payload: payload});
  };
export const getDetailsOfUser = createSelector(
  (state: RootState) => state.userDetails,
  userDetails => userDetails,
);
