import axios from "axios";

export default () => {

    const axiosApiInstance = (url, method, body,headers) => {
      return axios({
        url: url,
        method: method||'get',
        mode: 'cors',
        cache: 'no-cache',
        headers: headers ||{ 'Content-Type': 'application/json' },
        data: body||""
      })
    }

    return [axiosApiInstance];
}