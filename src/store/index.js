import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import inNeedUsersSlice from './inNeedUser';
import postsSlice from './posts';
// import tokenSlice from './token';
import userPaymentsSlice from './payments';
import authSlice from './auth';
import donorFavListSlice from './donorFavList';



let reducers = combineReducers({ 
    inNeedUsers: inNeedUsersSlice, 
    posts: postsSlice,
    // token: tokenSlice,
    payments: userPaymentsSlice,
    auth : authSlice,
    donorFavList:donorFavListSlice
 
});
const store = configureStore({ reducer: reducers });
export default store;