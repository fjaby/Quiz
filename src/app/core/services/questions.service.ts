import {Injectable} from '@angular/core';
import {DifficultiesEnum} from "../../shared/model/difficulties-enum";
import {Category} from "../../shared/model/category";
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Question} from "../../shared/model/question";
import {map, Observable} from "rxjs";
import {ApiQuestionResult} from "../../shared/model/api-question-result";

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  private readonly AMOUNT: number = 5;
  private readonly TYPE: string = "multiple";
  private readonly API_ENDPOINT = "api.php";
  private readonly AMOUNT_QUERYPARAM = "amount";
  private readonly CATEGORY_QUERYPARAM = "category";
  private readonly DIFFICULTY_QUERYPARAM = "difficulty";
  private readonly TYPE_QUERYPARAM = "type";

  constructor(private http: HttpClient) {
  }

  generateQuestions(difficulty: DifficultiesEnum, categoryId: number): Observable<Question[]> {
    let params: HttpParams = new HttpParams()
      .append(this.AMOUNT_QUERYPARAM,this.AMOUNT)
      .append(this.CATEGORY_QUERYPARAM, categoryId)
      .append(this.DIFFICULTY_QUERYPARAM, difficulty.valueOf())
      .append(this.TYPE_QUERYPARAM,this.TYPE)
    return this.http.get<ApiQuestionResult>(environment.apiUrl+this.API_ENDPOINT, {params})
      .pipe(map(value => value.results))
  }
}
