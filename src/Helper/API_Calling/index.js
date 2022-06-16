import axios from 'axios';

export const LoginApi = async (contactNumber) => {
    const Data = {
        mobile_number: contactNumber
    };
    let config = {
        method: 'POST',
        url: 'http://45.138.27.8:8006/loginlist/',
        headers: {
            'Content-Type': 'application/json'
        },
        data: JSON.stringify(Data),
    }
    console.log('config===',config)
    return axios(config)
        .then(function (response) {
            return response
        }).catch(function (error) {
            return error.response
        })
}

export const getData = async (url) => {
    let config = {
        method: 'GET',
        url: url,
        // 'http://45.138.27.8:8006/userdetail/1/',
        headers: {
            'Content-Type': 'application/json'
        },
    }
    return axios(config)
        .then(function (response) {
            return response
        }).catch(function (error) {
            return error
        })
}