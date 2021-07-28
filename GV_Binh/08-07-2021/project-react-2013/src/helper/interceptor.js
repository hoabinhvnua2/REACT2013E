import axios from "axios";

const httpClient = axios.create();
// @TODO handle request
httpClient.interceptors.request.use(
    config => {
        console.log('config', config)
        config.headers = {
            authoration: `Bearer tooken`
        }

        return config;
    },
    error => {}
);


// @TODO handle response

httpClient.interceptors.response.use(
    resp => {
        if(resp.status === 401 || resp.status === 403) {
        // @TODO redirect to layout permission
        } else {
            return resp;
        }
    },
    error => {
        // @TODO handle error to popup or notification
    }
)

export default httpClient