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
            const cookieToken = cookie.load('auth');
            const token = cookieToken || null;
            console.log(' checkIsLogedIn token : ', token)
            if(token){
                let user = jwt.verify(token, 'secret');
                if(user){
                    state.loggedIn = true
                    // state.user = user 
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
        // checkValidToken(state, action) {
        //     /**
        //      * action.payload.token
        //      */
        //     try {
        //         console.log('Token',action.payload.token);
        //         let user = jwt.verify(action.payload.token, 'secret');
        //         state.loggedIn = true
        //         state.user = user
        //         cookie.save('auth', action.payload.token,{ maxAge: 86400 });
        //         console.log('all good',state.loggedIn);
        //       }
        //       catch (e) {
        //         setLoginState({token:null,user:{},loggedIn:false});
        //         console.log('Token Validation Error', e);
        //       }
        // },
        logout(state, action) {
            state.loggedIn = false
            state.user = {}
        }
      

    }
});


export const { checkValidToken,setLoginState,logout,checkIsLogedIn } = auth.actions;

export default auth.reducer;