import superagent from 'superagent';
import useAjax from '../hooks/useAjax.js';
const [axiosApiInstance] = useAjax();

var base64 = require('base-64');

let donorSignupUrl = 'https://gazahopes.herokuapp.com/api/v1/donors/signup';
let donorSigninUrl = 'https://gazahopes.herokuapp.com/api/v1/donors/signin';


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