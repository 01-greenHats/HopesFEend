import { createSlice } from '@reduxjs/toolkit';

const postsSlice = createSlice({
    name: 'posts',
    initialState: {    
        posts: [],
    },
    reducers: {
        setPosts(state, action) {
            state.posts = action.payload.result || action.payload.results;
            // console.log(' state.posts : ',state.posts)
        },
        addNewPostToStore(state, action) {
            state.posts.push(action.payload)
            // state.posts = action.payload.result || action.payload.results;
            // console.log(' state.posts : ',state.posts)
        }
       
    }
});

export const { setPosts,addNewPostToStore } = postsSlice.actions;

export default postsSlice.reducer;
