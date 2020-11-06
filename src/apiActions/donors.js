import superagent from 'superagent';
import useAjax from '../hooks/useAjax.js';
const [axiosApiInstance] = useAjax();

let donorSignupUrl = 'https://gazahopes.herokuapp.com/api/v1/donors/signup';
let donorSigninUrl = 'https://gazahopes.herokuapp.com/api/v1/donors/signin';


export const donorSignup = (user) => {
    console.log('in need user signup called');
    return axiosApiInstance(donorSignupUrl, 'post', user);
}

export const donorSignin = (userName, password) => {
    console.log('in need user signin called');
    let myHeaders = {};
    const hashToken = base64.encode(`${userName}:${password}`);
    myHeaders['Authorization'] = `Basic ${hashToken}`;
    return axiosApiInstance(donorSigninUrl, 'post', '', myHeaders);
}