import superagent from 'superagent';

let usersUrl = 'https://gazahopes.herokuapp.com/api/v1/users';
let postsUrl = 'https://gazahopes.herokuapp.com/api/v1/posts';
let addPostUrl= 'https://gazahopes.herokuapp.com/api/v1/users/posts/add';
// let addPostUrl='localhost:8000/api/v1/users/posts/add';

// let productsApi = 'https://alhrthani-todos.herokuapp.com/api/v1/products';
// action creator is a function that returns an object
// return a function from my action creator
export const getInNeedUsersData = () => {
    // return a fucntion that will call superagent API
     return superagent.get(usersUrl).then(data=> {
        // call my action after getting the API response.
        console.log('====data===',data.body);
        return data.body;
        // dispatch(getAction(data.body));
    });
}

export const getPostsData = () => {
    // return a fucntion that will call superagent API
     return superagent.get(postsUrl).then(data=> {
        // call my action after getting the API response.
        console.log('====data===',data.body);
        return data.body;
        // dispatch(getAction(data.body));
    });
}

export const getRemoteProductData = () => {
    // return a fucntion that will call superagent API
    // console.log('==//==data==//=');
    return superagent.get(productsApi).then(data=> {
        // call my action after getting the API response.
        return data.body;
        // dispatch(getProductsAction(data.body));
    });
}

export const reduceStockQuantity = (body) => {
    let api =`${productsApi}/${body._id}`
    // return a fucntion that will call superagent API
    let myBody = {
        name:body.name,
        category:body.category,
        inStock:body.inStock -1,
        price:body.price
    }
    // body.inStock = body.inStock - 1;
    return superagent.put(api)
    .send(myBody)
    .then(data=> {
        // call my action after getting the API response.
        // console.log('====Updated===',data.body);
        return body;
    });
}




export const addPost = () => {
    let post =  {
        userid: "hrthani",
        title: "react heroku",
        content: "new",
        imageUrl: "image.jpg",
        comments: []      
    };

    let auth= 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiaHJ0aHFhbmkiLCJuYXRpb25hbE5vIjo5MDE1NjYxMjMsImlhdCI6MTYwNDUwNjM4MCwiZXhwIjoxNjA0NTEwODgwfQ.bIrzUTWUdfW6jbN0GTAAtjPS0DUlCAeushI0ntCKr_o';


  
}