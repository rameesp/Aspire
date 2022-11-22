import {combineReducers} from '@reduxjs/toolkit';
import userDetails from './entities/user-details';


export default combineReducers({
  userDetails: userDetails,
});
