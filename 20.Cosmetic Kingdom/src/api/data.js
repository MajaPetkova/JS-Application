import * as api from "./api.js";

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

export async function getAllProducts() {
  return api.get("/data/products?sortBy=_createdOn%20desc");
}
export async function getProductById(id){
    return api.get("/data/products/" + id)
}
export async function createProduct(item){
  return api.post("/data/products" , item)
}
