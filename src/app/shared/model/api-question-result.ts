import {Question} from "./question";

export interface ApiQuestionResult {
  response_code: number,
  results: Question[]
}
