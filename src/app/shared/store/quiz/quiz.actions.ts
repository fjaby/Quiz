import {Action} from '@ngrx/store';

export enum ActionTypes {
  GenerateQuestions = '[QUIZ] Generate Questions',
  Respond = '[QUIZ] Respond Question',
  Results = '[QUIZ] Results'
}

export class GenerateQuestions implements Action {
  readonly type: ActionTypes = ActionTypes.GenerateQuestions
}

export class Respond implements Action {
  readonly type: ActionTypes = ActionTypes.Respond
}

export class Results implements Action {
  readonly type: ActionTypes = ActionTypes.Results
}
