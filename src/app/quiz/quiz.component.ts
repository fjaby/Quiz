import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DifficultiesEnum} from "../shared/model/difficulties-enum";
import {CategoriesService} from "../core/services/categories.service";
import {Observable} from "rxjs";
import {Category} from "../shared/model/category";
import {QuestionsService} from "../core/services/questions.service";
import {Question} from "../shared/model/question";

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QUizComponent implements OnInit {
  generateForm!: FormGroup;
  categories$!: Observable<Category[]>;
  questions$!: Observable<Question[]>;


  constructor(private fb: FormBuilder,
              private categoriesService: CategoriesService,
              private questionsService :QuestionsService) {
  }

  ngOnInit(): void {
    this.generateForm = this.fb.group({
      category: ['', Validators.required],
      difficulty: ['', Validators.required],
    })
    this.categories$ = this.categoriesService.getCategories();

  }

  protected readonly DifficultiesEnum = DifficultiesEnum;

  generateQuiz() {
    console.log(this.generateForm.value)
    this.questions$ = this.questionsService.generateQuestions(this.generateForm.value.difficulty,this.generateForm.value.category)
  }
}
