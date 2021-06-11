
module.exports = {

    wait: (millis) => {
        let promise = new Promise((res, _rej) => {
            setTimeout(() => res(), millis);
        });
        return promise;
    }

}