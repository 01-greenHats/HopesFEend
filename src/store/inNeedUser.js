import { createSlice } from '@reduxjs/toolkit';

const inNeedUsersSlice = createSlice({
    name:'inNeedUsers',
    initialState : {    
        inNeedUsers: []
    },
    reducers: {
        setInNeedUsers(state, action) {
            // console.log("in add state!! ");
            state.inNeedUsers = action.payload.results || action.payload.result
        },
      

    }
});


export const { setInNeedUsers } = inNeedUsersSlice.actions;

export default inNeedUsersSlice.reducer;