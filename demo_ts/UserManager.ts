class UserManager {
    findByName(name: string ): any {
        let promise = new Promise(executor:(resolve,reject)) =>
        let request = new XMLHttpRequest();
        request.open(method:'GET',url + name);
        request.onload = function () {
            if(request.status == 200)
                resolve(request.response)
        } else {
            reject(new Error('error'))
        }
    }
}