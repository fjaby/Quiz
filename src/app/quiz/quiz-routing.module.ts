import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {QUizComponent} from "./quiz.component";
import {ResultComponent} from "./result/result.component";
import {CoreModule} from "../core/core.module";

const routes: Routes = [
  {
    path: '',
    component: QUizComponent
  },
  {
    path: 'result',
    component: ResultComponent
  },
];

@NgModule({
  imports: [
    CoreModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class QuizRoutingModule {
}
