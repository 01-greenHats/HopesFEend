import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import inNeedUsersSlice from './inNeedUser';
import postsSlice from './posts';
import tokenSlice from './token';
import userPaymentsSlice from './payments';
import auth from './auth';



let reducers = combineReducers({ 
    inNeedUsers: inNeedUsersSlice, 
    posts: postsSlice,
    token: tokenSlice,
    payments: userPaymentsSlice,
    auth : auth
 
});
const store = configureStore({ reducer: reducers });
export default store;