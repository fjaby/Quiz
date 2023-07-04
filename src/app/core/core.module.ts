import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import {CategoriesService} from "./services/categories.service";
import {QuestionsService} from "./services/questions.service";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers:[
    CategoriesService,
    QuestionsService
  ]
})
export class CoreModule { }
