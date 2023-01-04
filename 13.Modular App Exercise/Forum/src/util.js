export function getUserData() {
    return JSON.parse(sessionStorage.getItem('userData'))
}

export function setUserData(data) {
    sessionStorage.setItem('userData', JSON.stringify(data));

}

export function clearUserData() {
    sessionStorage.removeItem('userData')
}

export function createSubmitHandler(callback, ...fieldNames){
 return function(ev){
    ev.preventDefault();
    const formData = new FormData(ev.target);
    const result= {};

    for (let field of fieldNames){
        result[field] = formData.get(field).trim();
    }
    callback(result, ev)
 }
}