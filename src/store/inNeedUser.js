import { createSlice } from '@reduxjs/toolkit';

const inNeedUserSlice = createSlice({
    name:'inNeedUser',
    initialState : {    
        inNeedUser: []
    },
    reducers: {
        setInNeedUsers(state, action) {
            // console.log("in add state!! ");
            state.inNeedUsers = action.payload.results || action.payload.result
        },
      

    }
});


export const { setInNeedUsers } = inNeedUserSlice.actions;

export default inNeedUserSlice.reducer;