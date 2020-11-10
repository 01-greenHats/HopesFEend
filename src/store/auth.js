import { createSlice } from '@reduxjs/toolkit';
import cookie from 'react-cookies';
import jwt from 'jsonwebtoken';
const auth = createSlice({
    name:'inNeedUsers',
    initialState : {    
        loggedIn: false,
        user: {},
        token:''
    },
    reducers: {
        /**
         * action = {
         * action.payload.loggedIn
         * action.payload.token
         * action.payload.user
         * }
         */
        setLoginState(state, action){
            console.log('****************setLoginState()***************************')
            console.log('action : ',action)
            cookie.save('auth', action.payload.token,{ maxAge: 86400 });
            state.loggedIn = action.payload.loggedIn
            state.user = action.payload.user;
            state.token = action.payload.token;

        },
        /**
         * to check update the loedIn state if the user ha
         */
        checkIsLogedIn(state, action){
            const token = `${cookie.load('auth')}`;
            // var token = cookieToken || 'Ahmad';
            console.log(' checkIsLogedIn token : ',  `${cookie.load('auth')}`)
            if(token !== 'undefined'){
                let user = jwt.verify(token, 'secret');
                if(user){
                    state.loggedIn = true
                    state.user = user 
                    state.token = token
                    cookie.save('auth', token,{ maxAge: 86400 });
                    console.log('all good',state.loggedIn);
                }
            }else{
                state.loggedIn = false;
                state.user = {};
                console.log('all good',state.loggedIn);
            }
        },
        logout(state, action) {
            state.loggedIn = false
            state.user = {}
        }
      

    }
});


export const { checkValidToken,setLoginState,logout,checkIsLogedIn } = auth.actions;

export default auth.reducer;