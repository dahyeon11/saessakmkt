import axios from 'axios'
//import '../setenv'



async function postdata(endpoint, data, parameter) {
    const options = {
        url: endpoint,
        method: 'POST',
        baseURL: process.env.REACT_APP_API_URL,
        data: data,
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

export default postdata