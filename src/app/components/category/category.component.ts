import { Component, OnInit } from '@angular/core';
import { Category } from '../../models/category';
import { HttpClient } from '@angular/common/http';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})

export class CategoryComponent implements OnInit {
  categories : Category[]=[];
  currentCategory : Category;

  constructor(private categoryService:CategoryService){ }

  ngOnInit(): void {
    this.getCategory();
  }

  getCategory(){
    this.categoryService
    .getCategories()
    .subscribe(response => {
      this.categories = response.data
    });
  }

  setCurrentCategory(category:Category){
    this.currentCategory = category;
  }

  getCurrentCategoryClass(category:Category){
    if(category == this.currentCategory){
      return "list-group-item active"
    }else{
      return "list-group-item"
    }
  }

    getAllCategoryClass(){
      if(!this.currentCategory){
        return "list-group-item active"
      }else{
        return "list-group-item"
      }
    }
}
