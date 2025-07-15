import { Category } from "./category";
import { ResponseModel } from "./responseModel";

export interface CategoryResponseModel extends ResponseModel{
    data:Category[]; //might set with a wrong call. incase of an error check here first
}