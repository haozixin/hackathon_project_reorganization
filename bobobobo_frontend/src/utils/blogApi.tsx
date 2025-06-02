import axios from 'axios';

const baseUrl = 'http://localhost:8881/api';

axios.defaults.baseURL = baseUrl;

// axios.interceptors.request.use(
//     async (config) => {
//         if (localStorage.getItem('token')) {
//             config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
//         }
//         return config;
//     },
//     (error) => Promise.reject(error),
// );

// axios.interceptors.response.use(
//     (res: any) => res,
//     (error: any) => {
//         const status = error.response ? error.response.status : null;
//         if (status === 406) {
//             localStorage.clear();
//             window.location.replace('/');
//         }
//         if (status === 403) {
//             window.location.replace('/forbidden');
//         }
//         return Promise.reject(error);
//     },
// );

export const getMoment = (token: string) => {
    console.log('Mocking getMoment API call');
    return Promise.resolve({
        data: [
            {
                id: 1,
                topic: 'Simulated blog theme 1',
                content: 'This is the content of the first simulated blog.',
                table: { amount: '100' },
                createTime: '2023-10-27T10:00:00Z'
            },
            {
                id: 2,
                topic: 'Simulated blog theme 2',
                content: 'This is the content of the second simulated blog.',
                table: { amount: '200' },
                createTime: '2023-10-27T11:00:00Z'
            }
        ],
        status: 200,
        statusText: 'OK',
        headers: {},
        config: {},
        request: {}
    });
};

export const postMoment = (topic: string, content: string, table:object, amount: string, token: string) => {
    console.log('Mocking postMoment API call', { topic, content, table, amount });
    return Promise.resolve({
        data: { message: 'Blog published successfully (simulated)' },
        status: 200,
        statusText: 'OK',
        headers: {},
        config: {},
        request: {}
    });
};