import { combineReducers } from 'redux';
import locationReducer from 'store/reducers/locationReducer';

export default combineReducers({
    locations: locationReducer,
})