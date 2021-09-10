import axios from 'axios';
import { jsonDateParser } from 'json-date-parser';

const transformResponse = (data: any) => {
    if (typeof data === 'string') {
        try {
            data = JSON.parse(data, jsonDateParser);
        } catch { /*Ignore*/ }
    }
    return data;
};

const tokenAxios = axios.create();

export function ConfigureAxios(token: string) {
    axios.defaults.transformResponse = transformResponse;
    tokenAxios.defaults.transformResponse = transformResponse;

    tokenAxios.interceptors.request.use(config => {
        // TODO: Token is always? required. Should we do something here to log 
        // the user out if token is not available or expired ?
        
        if (token) {
            config.headers.Authorization = `bearer ${token}`;
        }
        return config;
    });
}

export { tokenAxios, axios };
