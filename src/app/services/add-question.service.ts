import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddQuestionService {

  private addQuestionURL = 'http://localhost:8000/user'
  private getQuestionURL = 'http://localhost:8000/user/getQuestion'

  constructor(
    private http: HttpClient
  ) { }

  addQuestion(quesData){
    return this.http.post<any>(this.addQuestionURL, quesData)
  }

  getQuestion(data){
    return this.http.post<any>(this.getQuestionURL, data)
  }
}

