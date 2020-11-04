import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import inNeedUsersSlice from './inNeedUser';
import postsSlice from './posts';

let reducers = combineReducers({ 
    inNeedUsers: inNeedUsersSlice, 
    posts:postsSlice
 
});
const store = configureStore({ reducer: reducers });
export default store;