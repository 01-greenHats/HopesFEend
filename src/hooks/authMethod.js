import React, {useState} from 'react';

const useCookie = (callback) => {

    const [values, setValues] = useState({});
    
    const handleSubmit = (e) => {
        console.log("Generic submit Handler!!####### !! ")
        if (e) e.preventDefault();
        callback(values);
    }

    const handleChange = (e) =>{
        setValues({...values, [e.target.name]: e.target.value});
        console.log("Generic change Handler !! ", values)
    }
    return [handleSubmit, handleChange, values];
}
export default useForm;