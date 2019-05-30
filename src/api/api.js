export default baseUrl => {
    const fetchCreator = method => (url, options) =>
        fetch(`http://${baseUrl}/${url}`, {
            method,
            ...options,
        })
            .then(checkStatus)
            .then(async result => {
                const obj = {};
                obj.data = await result.json();
                result.headers.forEach((el, key)=>{
                    if(key === 'x-total-count') obj.totalCount = el;
                });
                if(obj.totalCount) return obj;
                return result.json();
            })
            .catch((err) => {
                console.log(err);
                return err;
            });

    return {
        get: fetchCreator('GET'),
        post: fetchCreator('POST'),
        patch: fetchCreator('PATCH'),
        delete: fetchCreator('DELETE'),
        put: fetchCreator('PUT'),
    };
};


const checkStatus = result => {
    if (result.status > 204 || result.status < 200) throw new Error(`${result.status} - ${result.statusText}`);
    return result;
};