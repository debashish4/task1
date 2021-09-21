import axios from 'axios';

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