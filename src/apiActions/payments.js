import superagent from 'superagent';
import useAjax from '../hooks/useAjax.js';
const [axiosApiInstance] = useAjax();
// import axios from "axios";

//**********URLs****************
//router.post('/api/v1/payments', handlePostItem);
let addUserPaymentUrl='https://gazahopes.herokuapp.com/api/v1/payments/'

//router.get('/api/v1/payments/:userId', handleGetPaymentsForOneUser);
let getUserPaymentsUrl='https://gazahopes.herokuapp.com/api/v1/payments/'

let createNewPaymentUrl='https://gazahopes.herokuapp.com/api/v1/pay/'


//**********Actions****************
export const addUserPayment = (payment) => {  
    console.log('add user payment called');  
    // let myHeaders={};
    // myHeaders['Authorization']=`Bearer ${token}`;
    return axiosApiInstance(addUserPaymentUrl,'post',payment)   
}

export const getUserPayments = (userId) => { 
    console.log('get one user payments called');
    getUserPaymentsUrl=getUserPaymentsUrl+ ""+userId;
    console.log({getUserPaymentsUrl});
    return axiosApiInstance(getUserPaymentsUrl);    
}

export const createNewPayment = (paymentDtl) => { 
    console.log('createNewPayment called');
    // createNewPaymentUrl=createNewPaymentUrl+ ""+userId;
    console.log({createNewPaymentUrl});
    return axiosApiInstance(createNewPaymentUrl,'post',paymentDtl);    
}

