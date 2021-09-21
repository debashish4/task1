import axios from 'axios';
import { client_id } from "../constant/api_constant"

export const getLoginWindow = () => {
    return axios({
        method: 'GET',
        url: `https://github.com/login/oauth/authorize?scope=user&client_id=${client_id}&redirect_uri=http://localhost:3000/login`,

    })
}


export const getAccessToken = (client_id, client_secret, code) => {
    return axios({
        method: 'POST',
        url: `https://github.com/login/oauth/access_token`,
        params: {
            client_id,
            client_secret,
            code
        }
    })
    .catch(err => {
        return err
    })
}


export const gitHubUserRepos = (token = "", name = "") => {
    return axios({
        method: 'GET',
        url: `https://api.github.com/users/${name}/repos`,
        headers: { 'Authorization': token },
    })
}

export const gitHubUserActivities = (token = "", name = "") => {
    return axios({
        method: 'GET',
        url: `https://api.github.com/users/${name}/events`,
        headers: { 'Authorization': token },
    })
}