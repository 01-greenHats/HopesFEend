import superagent from 'superagent';
import useAjax from '../hooks/useAjax.js';
const [axiosApiInstance] = useAjax();
// import axios from "axios";


let usersUrl = 'https://gazahopes.herokuapp.com/api/v1/users';
let postsUrl = 'https://gazahopes.herokuapp.com/api/v1/posts';
let addPostUrl = 'https://gazahopes.herokuapp.com/api/v1/users/posts/add';
let userSignupUrl='https://gazahopes.herokuapp.com/api/v1/users/signup';
let addCommentUrl='https://gazahopes.herokuapp.com/api/v1/users/comments/add/';


// let addPostUrl='localhost:8000/api/v1/users/posts/add';

// let productsApi = 'https://alhrthani-todos.herokuapp.com/api/v1/products';
// action creator is a function that returns an object
// return a function from my action creator
//url, method, body,headers

export const getInNeedUsersData = () => {
    return axiosApiInstance(usersUrl)
}

// export const getInNeedUsersData = () => {
//     // return a fucntion that will call superagent API
//     return superagent.get(usersUrl).then(data => {
//         // call my action after getting the API response.
//         console.log('====data===', data.body);
//         return data.body;
//         // dispatch(getAction(data.body));
//     });
// }

export const getPostsData = () => {
    return axiosApiInstance(postsUrl)   
}

// export const getPostsData = () => {
//     // return a fucntion that will call superagent API
//     return superagent.get(postsUrl).then(data => {
//         // call my action after getting the API response.
//         console.log('====data===', data.body);
//         return data.body;
//         // dispatch(getAction(data.body));
//     });
// }


export const addPost = (post,token) => {  
    console.log('add post called');  
    let myHeaders={};
    myHeaders['Authorization']=`Bearer ${token}`;
    return axiosApiInstance(addPostUrl,'post',post,myHeaders)    
   
}

// export const addPost = (post,token) => {    
//     let myHeaders={};
//     myHeaders['Authorization']=`Bearer ${token}`;
//     return axios({
//         url: addPostUrl,
//         method: 'post',
//         mode: 'cors',
//         cache: 'no-cache',
//         headers: myHeaders,
//         data: post
//     })
// }


export const addComment = (comment,token,postId) => {
    console.log('add comment called');  
    addCommentUrl=addCommentUrl+postId;
    console.log('addCommentUrl>>',addCommentUrl);
    let myHeaders={};
    myHeaders['Authorization']=`Bearer ${token}`;
    return axiosApiInstance(addCommentUrl,'post',comment,myHeaders)     
}

// export const addComment = (comment,token,postId) => {
//     console.log('add comment called');  
//     addCommentUrl=addCommentUrl+postId;
//     console.log('addCommentUrl>>',addCommentUrl);
//     let myHeaders={};
//     myHeaders['Authorization']=`Bearer ${token}`;
//     return axios({
//         url: addCommentUrl,
//         method: 'post',
//         mode: 'cors',
//         cache: 'no-cache',
//         headers: myHeaders,
//         data: comment
//     })
// }

export const inNeedUserSignup = (user) => {
    return axiosApiInstance(userSignupUrl,'post',user); 
     
}

// export const inNeedUserSignup = (user) => {
   
//     return axios({
//         url: userSignupUrl,
//         method: 'post',
//         mode: 'cors',
//         cache: 'no-cache',
//         headers: { 'Content-Type': 'application/json' },
//         data: user
//     })
// }




// export const addPost = () => {
//     let post =  {
//         userid: "hrthani",
//         title: "react heroku",
//         content: "new",
//         imageUrl: "image.jpg",
//         comments: []      
//     };

//     let auth= 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiaHJ0aHFhbmkiLCJuYXRpb25hbE5vIjo5MDE1NjYxMjMsImlhdCI6MTYwNDUwNjM4MCwiZXhwIjoxNjA0NTEwODgwfQ.bIrzUTWUdfW6jbN0GTAAtjPS0DUlCAeushI0ntCKr_o';

// }