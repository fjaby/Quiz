import {QuestionDto} from "./questionDto";

export interface ApiQuestionResult {
  response_code: number,
  results: QuestionDto[]
}
