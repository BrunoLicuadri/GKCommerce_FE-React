import { AxiosRequestConfig } from "axios";
import { requestBackend } from "../utils/requests";
import { ProductDTO } from "../models/product";

export function findPageRequest(page: number, name: string, size = 12, sort = "name") {
    const config: AxiosRequestConfig = {
        method: "GET",
        url: "/products",
        params: {
            page,
            name,
            size,
            sort
        }
    }
    return requestBackend(config);
}

export function findById(id: number) {
    return requestBackend({ url:`/products/${id}` });
}

export function deleteById(id: number){
    const config: AxiosRequestConfig ={
        url: `/products/${id}`,
        method: "DELETE",
        withCredentials: true
    }

    return requestBackend(config);
}

export function updateRequest(obj : ProductDTO){
    const config: AxiosRequestConfig ={
        url: `/products/${obj.id}`,
        method: "PUT",
        withCredentials: true,
        data: obj
    }
    return requestBackend(config);
}


export function insertRequest(obj : ProductDTO){
    const config: AxiosRequestConfig ={
        url: "/products",
        method: "POST",
        withCredentials: true,
        data: obj
    }
    return requestBackend(config);
}