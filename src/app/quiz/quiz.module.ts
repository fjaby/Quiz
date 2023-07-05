import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {QUizComponent} from './quiz.component';
import {ResultComponent} from './result/result.component';
import {MaterialModule} from "../shared/material/material.module";
import {QuizRoutingModule} from "./quiz-routing.module";
import {ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    QUizComponent,
    ResultComponent
  ],
  imports: [
    QuizRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class QuizModule {
}
