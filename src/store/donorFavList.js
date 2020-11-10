import { createSlice } from '@reduxjs/toolkit';

const donorFavListSlice = createSlice({
    name:'donorFavList',
    initialState : {    
        donorFavList: []
    },
    reducers: {
        setDonorFavList(state, action) {
            // console.log("in add state!! ");
            state.donorFavList = action.payload
        },
      

    }
});


export const { setDonorFavList } = donorFavListSlice.actions;

export default donorFavListSlice.reducer;