import { combineReducers } from 'redux';
import NearbySnypprReducer from './nearbySnyppr_reducer';
import AccountTypeReducer from './accounttype_reducer';

const rootReducer = combineReducers({
  nearbySnypprs: NearbySnypprReducer,
  AccountType: AccountTypeReducer,
});

export default rootReducer;
