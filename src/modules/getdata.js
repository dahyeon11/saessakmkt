import axios from 'axios'
//import '../setenv'



async function getdata(method, endpoint, parameter) {
    const options = {
        url: endpoint,
        method: method,
        baseURL: process.env.REACT_APP_API_URL,
        params: {
            ...parameter
        }
    }
    console.log('url = ', process.env.REACT_APP_API_URL, process.env.REACT_APP_URL)
    
    try {
        var result = await axios(options)
        console.log(result)
    } catch (err) {
        console.log(err)
    }

    return result
}

export default getdata