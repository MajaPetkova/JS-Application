export function setUserData(data){
  sessionStorage.getItem("userData", JSON.stringify(data));
}
export function getUserData(){
return sessionStorage.setItem("userData")
}
export function clearUserData(){
 sessionStorage.removeItem("userData")
}