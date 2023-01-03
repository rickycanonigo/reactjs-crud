import axios from "axios";

export const SERVER_URI = 'http://127.0.0.1:8000';
export const SERVER_API = 'http://127.0.0.1:8000/api';

export const headers = {
    'content-type': 'application/json;',
}

// const token = localStorage.getItem('token');

let Api = axios.create({
    baseURL: SERVER_API,
    headers: headers
});

Api.interceptors.request.use((config) => {
    return config;
});


Api.interceptors.response.use(
    function(response) {
        // Call was successful, don't do anything special.
        return response;
    },
    function (error) {
        switch (error.response.status) {
            case 401: // Not logged in
                // localStorage.removeItem('token');
                window.location.reload();
                break;
            case 419: // Session expired
                alert('session expired');
                // localStorage.removeItem('token');
                window.location.reload();
                break;
            case 503: // Down for maintenance
                // Bounce the user to the login screen with a redirect back
                window.location.reload();
                break;
            case 500:
                alert('Oops, something went wrong!  The team have been notified.');
                break;
            default:
                // Allow individual requests to handle other errors
                return Promise.reject(error);
        }
    }
);

// if (token) {
//     Api.defaults.headers.common["Authorization"] =  `Bearer ${token}`;
// }

export default Api;
