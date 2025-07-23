import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { ToastrService } from 'ngx-toastr';
import { response } from 'express';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrl: './product-add.component.css'
})
export class ProductAddComponent {

  productAddForm:FormGroup;

  constructor(private formBuilder:FormBuilder,
              private productService:ProductService,
              private toastrService:ToastrService){
    this.productAddForm=formBuilder.group({
      productName:["",Validators.required],
      unitPrice:["",Validators.required],
      unitsInStock:["",Validators.required],
      categoryId:["",Validators.required]
    })
  }

  add() {
    if(this.productAddForm.valid){
      let productModel = Object.assign({},this.productAddForm.value)
      this.productService.add(productModel).subscribe(response=>{
        this.toastrService.success("yessir", "SUCCESS")
      },responseError=>{
        if(responseError.error.Errors.length>0){
          for(let i=0; i < responseError.error.Errors.length;i++)
          this.toastrService.error(responseError.error.Errors[i].ErrorMessage,"valdiation error sir")
        }
      })
    }else{
      this.toastrService.error("form element(s) missing","ERROR")
    }
  }

}
