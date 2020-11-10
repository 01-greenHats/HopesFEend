import useAjax from '../hooks/useAjax.js';
const [axiosApiInstance] = useAjax();
var base64 = require('base-64');

let getUsersUrl = 'https://gazahopes.herokuapp.com/api/v1/users';
let userSignupUrl='https://gazahopes.herokuapp.com/api/v1/users/signup';
let userSigninUrl='https://gazahopes.herokuapp.com/api/v1/users/signin';
let getOneUserUrl='https://gazahopes.herokuapp.com/api/v1/users/getOneUser'

export const getInNeedUsersData = () => {
    return axiosApiInstance(getUsersUrl)
}

export const inNeedUserSignup = (user) => {
    console.log('in need user signup called');  
    return axiosApiInstance(userSignupUrl,'post',user);      
}

export const inNeedUserSignin = (userName,password) => {
    console.log('in need user signin called');  
    let myHeaders={};
    const hashToken = base64.encode(`${userName}:${password}`);
    myHeaders['Authorization']=`Basic ${hashToken}`;
    return axiosApiInstance(userSigninUrl,'post','',myHeaders);      
}

export const getOneUser = (token) => {
    console.log('getPostsByAuthorUrl called');  
    // getPostsByAuthorIdUrl=getPostsByAuthorIdUrl+""+postId+"/"+commentId;
    console.log('editCommentUrl>>',getPostsByAuthorIdUrl);
    let myHeaders={};
    myHeaders['Authorization']=`Bearer ${token}`;
    return axiosApiInstance(getOneUserUrl,'get','',myHeaders)     
}










