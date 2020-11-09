import superagent from 'superagent';
import useAjax from '../hooks/useAjax.js';
const [axiosApiInstance] = useAjax();
// import axios from "axios";

//**********posts URLs****************
let getPostsUrl = 'https://gazahopes.herokuapp.com/api/v1/getAllPosts';
let addPostUrl = 'https://gazahopes.herokuapp.com/api/v1/users/posts/add';

//router.delete('/api/v1/:model/posts/delete/:id', barerAuth, deleteAuth, handleDeleteposts)
let deletePostUrl='https://gazahopes.herokuapp.com/api/users/posts/delete/';

//router.patch(https://gazahopes.herokuapp.com/api/v1/users/posts/edit/:id
let patchPostUrl='https://gazahopes.herokuapp.com/api/v1/users/posts/edit/';


//**********comments URLs****************
let addCommentUrl='https://gazahopes.herokuapp.com/api/v1/users/comments/add/';

//router.delete('/api/v1/:model/comments/delete/:id/:commentId', barerAuth, deleteAuth, handleDeleteSComment)
let deleteCommentUrl='https://gazahopes.herokuapp.com/api/users/comments/delete/';

//router.patch('/api/v1/:model/comments/edit/:id/:commentId', barerAuth, deleteAuth, handleEditSComment);
let editCommentUrl='https://gazahopes.herokuapp.com/api/users/comments/edit/';


let getPostsByAuthorIdUrl='https://gazahopes.herokuapp.com/api/users/getAllPostsByAuthor';


// users/getAllPostsByAuthor 
//**********posts Actions****************
export const getPosts = () => {
    console.log('get posts called');  
    return axiosApiInstance(getPostsUrl)   
}

export const addPost = (post,token) => {  
    console.log('add post called');  
    let myHeaders={};
    myHeaders['Authorization']=`Bearer ${token}`;
    return axiosApiInstance(addPostUrl,'post',post,myHeaders)   
}

export const deletePost = (postId,token) => { 
    deletePostUrl=deletePostUrl+ ""+postId;
    console.log('delete post called');  
    let myHeaders={};
    myHeaders['Authorization']=`Bearer ${token}`;
    return axiosApiInstance(deletePostUrl,'delete','',myHeaders);    
}

export const editPost = (postId,newPost,token) => { 
    deletePostUrl=deletePostUrl+ ""+postId;
    console.log('edit post called');  
    let myHeaders={};
    myHeaders['Authorization']=`Bearer ${token}`;
    return axiosApiInstance(editCommentUrl, 'put', newPost, myHeaders);      
}

//**********comments Actions****************
export const addComment = (postId, comment, token) => {
    console.log('add comment called');  
    console.log('postId>>>>',postId);
    console.log('comment>>>>',comment);
    console.log('token>>>>',token);
    let commentBody = { content : comment}

    addCommentUrl=addCommentUrl+postId;
    console.log('addCommentUrl>>',addCommentUrl);
    let myHeaders={};
    myHeaders['Authorization']=`Bearer ${token}`;
    return axiosApiInstance(addCommentUrl,'post',commentBody,myHeaders)     
    // return axiosApiInstance(addCommentUrl,'post',comment,myHeaders)     
}

export const deleteComment = (postId,commentId,token) => {
    console.log('delete comment called');  
    deleteCommentUrl=deleteCommentUrl+""+postId+"/"+commentId;
    console.log('deleteCommentUrl>>',deleteCommentUrl);
    let myHeaders={};
    myHeaders['Authorization']=`Bearer ${token}`;
    return axiosApiInstance(deleteCommentUrl,'delete','',myHeaders)     
}

export const editComment = (postId,commentId,token) => {
    console.log('edit comment called');  
    editCommentUrl=editCommentUrl+""+postId+"/"+commentId;
    console.log('editCommentUrl>>',editCommentUrl);
    let myHeaders={};
    myHeaders['Authorization']=`Bearer ${token}`;
    return axiosApiInstance(editCommentUrl,'put','',myHeaders)     
}



export const getPostsByAuthorId = (token) => {
    console.log('getPostsByAuthorUrl called');  
    // getPostsByAuthorIdUrl=getPostsByAuthorIdUrl+""+postId+"/"+commentId;
    console.log('editCommentUrl>>',getPostsByAuthorIdUrl);
    let myHeaders={};
    myHeaders['Authorization']=`Bearer ${token}`;
    return axiosApiInstance(getPostsByAuthorIdUrl,'get','',myHeaders)     
}





