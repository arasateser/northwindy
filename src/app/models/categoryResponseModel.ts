import { Category } from "./category";

export interface ProductResponseModel {
    data:Category[]; //might set with a wrong call. incase of an error check here first
}