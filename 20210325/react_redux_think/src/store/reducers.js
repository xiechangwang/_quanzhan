//整合reducer
import {combineReducers} from 'redux';
//合并多个store
//home-store
import {reducer as homeReducer} from '../pages/Home/store';

const reducers=combineReducers({
  home:homeReducer,
});

export default reducers;