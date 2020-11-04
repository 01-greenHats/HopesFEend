import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import inNeedUserSlice from './inNeedUser';
let reducers = combineReducers({ 
    inNeedUser: inNeedUserSlice, 
 
});
const store = configureStore({ reducer: reducers });
export default store;