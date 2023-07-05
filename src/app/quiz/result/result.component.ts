import {Component} from '@angular/core';
import {questionsSelector} from "../../shared/store/quiz/quiz.selector";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent {
  questions$ = this.store.select(questionsSelector);

  constructor(private store: Store) {
  }


}
