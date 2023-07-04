export interface Question {
  id:string,
  question:string,
  correct_answer:string,
  selected_answer?:string,
  incorrect_answers: string[]
}
