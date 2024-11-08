/* eslint-disable @typescript-eslint/no-explicit-any */
const BASE_URL = import.meta.env.VITE_SERVER_URL;
function wait(delay) {
    return new Promise((resolve) => {
        setTimeout(resolve, delay);
    });
}
async function request(url, method = "GET", data = null) {
    const options = { method };
    const headers = {};
    // if (data) {
    //   options.body = JSON.stringify(data);
    //   headers["Content-Type"] = "application/json; charset=UTF-8";
    // }
    if (data && !(data instanceof FormData)) {
        options.body = JSON.stringify(data);
        headers["Content-Type"] = "application/json; charset=UTF-8";
    }
    else if (data instanceof FormData) {
        options.body = data;
    }
    options.headers = headers;
    return wait(100)
        .then(() => {
        return fetch(BASE_URL + url, options);
    })
        .then(async (response) => {
        if (!response.ok) {
            const res = await response.text();
            console.error("Server error response:", res);
            const errorDetails = await response.json().catch(() => ({ message: "Unknown error" }));
            switch (response.status) {
                case 400:
                case 500:
                    throw new Error(errorDetails.message || "Internal Server Error");
                default:
                    throw new Error(errorDetails.message || "An unexpected error occurred");
            }
        }
        const text = await response.text();
        try {
            return JSON.parse(text);
        }
        catch (error) {
            console.log(error);
        }
    });
}
export const client = {
    get: (url) => request(url),
    post: (url, data) => request(url, "POST", data),
    delete: (url) => request(url, "DELETE"),
    put: (url, data) => request(url, "PUT", data),
};
