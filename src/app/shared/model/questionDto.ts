import {Question} from "./question";

export interface QuestionDto {
  question:string,
  correct_answer:string,
  selected_answer:string,
  incorrect_answers: string[]
}

export const toQuestion=(questionDto: QuestionDto, id: number):Question=>(
  {
    ...questionDto,
    id:id,
    answers: [...questionDto.incorrect_answers, questionDto.correct_answer]
      .sort((a, b) => Math.random() < .5 ? -1 : 1),
  }
)

