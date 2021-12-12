import { combineReducers } from 'redux';
import authReducer from './auth';
import summaryReducer from './summary';
import countryReducer from './countries';

export default combineReducers({
  auth: authReducer,
  summary: summaryReducer,
  countries: countryReducer,
});
