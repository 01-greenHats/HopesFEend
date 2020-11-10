import superagent from 'superagent';
import useAjax from '../hooks/useAjax.js';
const [axiosApiInstance] = useAjax();

var base64 = require('base-64');

let donorSignupUrl = 'https://gazahopes.herokuapp.com/api/v1/donors/signup';
let donorSigninUrl = 'https://gazahopes.herokuapp.com/api/v1/donors/signin';

let addToDonorFavListUrl = 'https://gazahopes.herokuapp.com/api/v1/donors/addToFav'
let deleteFromDonorFavListURL = 'https://gazahopes.herokuapp.com/api/v1/donors/deleteFromFav'
let getDonorFavListUrl = 'https://gazahopes.herokuapp.com/api/v1/donors/getDonorFavList'


export const donorSignup = (donor) => {
    console.log('donor signup called');
    return axiosApiInstance(donorSignupUrl, 'post', donor);
}

export const donorSignin = (userName, password) => {
    console.log('donor signin called');
    let myHeaders = {};
    const hashToken = base64.encode(`${userName}:${password}`);
    myHeaders['Authorization'] = `Basic ${hashToken}`;
    return axiosApiInstance(donorSigninUrl, 'post', '', myHeaders);
}

export const addToDonorFavList = (token,userId) => {
    console.log('addToDonorFavList called');  
    console.log('token>>>>',token);
    console.log('userId>>>>',userId);

    let body = { favUsers : userId}
    let myHeaders={};
    myHeaders['Authorization']=`Bearer ${token}`;
    return axiosApiInstance(addToDonorFavListUrl,'put',body,myHeaders)        
}

export const deleteFromDonorFavList = (token,userId) => {
    console.log('deleteFromDonorFavList called');  
    console.log('token>>>>',token);
    console.log('userId>>>>',userId);

    let body = { favUsers : userId}
    let myHeaders={};
    myHeaders['Authorization']=`Bearer ${token}`;
    return axiosApiInstance(deleteFromDonorFavListURL,'delete',body,myHeaders)        
}

export const getDonorFavList = (token) => {
    console.log('getDonorFavList called');  
    // console.log('editCommentUrl>>',getPostsByAuthorIdUrl);
    let myHeaders={};
    myHeaders['Authorization']=`Bearer ${token}`;
    return axiosApiInstance(getDonorFavListUrl,'get','',myHeaders)     
}