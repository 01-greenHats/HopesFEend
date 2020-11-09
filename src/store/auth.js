import { createSlice } from '@reduxjs/toolkit';
import cookie from 'react-cookies';
import jwt from 'jsonwebtoken';
const auth = createSlice({
    name:'inNeedUsers',
    initialState : {    
        loggedIn: false,
        user: {},
    },
    reducers: {
        // setInNeedUsers(state, action) {
        //     // console.log("in add state!! ");
        //     state.inNeedUsers = action.payload.results || action.payload.result
        // },
        checkValidToken(state, action) {
            /**
             * action.payload.token
             */
            try {
                console.log('Token',action.payload.token);
                let user = jwt.verify(action.payload.token, 'donttellanyoneRoqaia');
                console.log('all good');
                // setLoginState(true, action.payload.token, user);
                setLoginState(
                    {
                    token:action.payload.token,
                    user:user,
                    loggedIn:true
                }
                );
              }
              catch (e) {
                setLoginState({token:null,user:{},loggedIn:false});
                // setLoginState(false, null, {});
                console.log('Token Validation Error', e);
              }
        },
        setLoginState(state, action){
            /**
             * action = {
             * action.payload.loggedIn
             * action.payload.token
             * action.payload.user
             * }
             */
            console.log('action : ',action)
            cookie.save('auth', action.payload.token,{ maxAge: 86400 });
            // setState({ token, loggedIn, user });
            state.loggedIn = action.payload.loggedIn
            state.user = action.payload.user
        },
        logout(state, action) {
            // console.log("in add state!! ");
            state.loggedIn = false
            state.user = {}
            // this.setLoginState(false, null, {});
        }
      

    }
});


export const { checkValidToken,setLoginState,logout } = auth.actions;

export default auth.reducer;