import request from 'request';
const baseUrl: string = 'https://advantestsandbox.docebosaas.com';
const token: string = 'Bearer ' + '35d8d207d3ea08bd5924e5b2e50f20ae4ddc8e38';

interface ReqParamsInterface {
    url: string;
    method: string;
    json: boolean;
    headers: any;
    body: any;
}

const params: ReqParamsInterface = {
    url: "",
    method: "GET",
    json: true,
    headers: {
        "content-type": "application/json",
        "Authorization": token
    },
    body: {}
};

// test method
export const test = (url: string, data: any, callback: any): any => {
    const options = {
        url: baseUrl + url,
        method: "GET",
        body: data
    }
    request(Object.assign(params, options), (error: any, response: any, body: any) => {
        if (!error && response.statusCode == 200) {
            console.log(body) // success
            callback(body);
        } else {
            throw error;
        }
    });
}

// fetch method
export const fetch = (url: string, data: any): Promise<any> => {
    const options = {
        url: baseUrl + url,
        method: "GET",
        body: data
    }
    return new Promise((resolve, reject) => {
        request(Object.assign(params, options), (error: any, response: any, body: any) => {
            if (!error) {
                return resolve(body);
            } else {
                return reject(error);
            }
        });
    })
}

// post method
export const post = (url: string, data: any): Promise<any> => {
    const options = {
        url: baseUrl + url,
        method: "POST",
        body: data
    };
    return new Promise((resolve, reject) => {
        request(Object.assign(params, options), (error: any, response: any, body: any) => {
            console.log('>>>>>>>>>>>', response);
            console.log('>>>>>>>>>>>>>>', body);
            if (!error) {
                return resolve(body);
            } else {
                return reject(error);
            }
        });
    })
}
