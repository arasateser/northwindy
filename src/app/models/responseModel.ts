import { Product } from "./product";
import { ProductResponseModel } from "./productResponseModel";

export interface ResponseModel extends ProductResponseModel {
    success:boolean,
    message:string
}