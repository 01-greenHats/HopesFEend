import { createSlice } from '@reduxjs/toolkit';

const userPaymentsSlice = createSlice({
    name: 'userPayments',
    initialState: {   
        // userPayments: []
    
        userPayments: [{amount: "111.00",
        currency: "USD",
        date: "2020-10-06T11:51:22.000Z",
        donorName: "undefined undefined",
        userId: "5MNSBA6FP2QF4"}]
    },
    reducers: {
        setUserPayments(state, action) {
            state.posts = action.payload 
        },       
    }
});

export const { setUserPayments } = userPaymentsSlice.actions;
export default userPaymentsSlice.reducer;
