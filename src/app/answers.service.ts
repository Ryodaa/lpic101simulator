import { QuestionsService } from './questions.service';
import {
  Injectable
} from '@angular/core';
import { Question } from './question';

@Injectable({
  providedIn: 'root'
})
export class AnswersService {

  questions!: Question[];

  answers = [
    {
      id: 1,
      answerArr: [],

    },
    {
      id: 2,
      answerArr: [],
    },
    {
      id: 3,
      answerArr: [],
    },
    {
      id: 4,
      answerArr: [],
    },
    {
      id: 5,
      answerArr: [],
    },
    {
      id: 6,
      answerArr: [],
    },
    {
      id: 7,
      answerArr: [],
    },
    {
      id: 8,
      answerArr: [],
    },
    {
      id: 9,
      answerArr: [],
    },
    {
      id: 10,
      answerArr: [],
    },
    {
      id: 11,
      answerArr: [],
    },
    {
      id: 12,
      answerArr: [],
    },
    {
      id: 13,
      answerArr: [],
    },
    {
      id: 14,
      answerArr: [],
    },
    {
      id: 15,
      answerArr: [],
    },
    {
      id: 16,
      answerArr: [],
    },
    {
      id: 17,
      answerArr: [],
    },
    {
      id: 18,
      answerArr: [],
    },
    {
      id: 19,
      answerArr: [],
    },
    {
      id: 20,
      answerArr: [],
    },
    {
      id: 21,
      answerArr: [],
    },
    {
      id: 22,
      answerArr: [],
    },
    {
      id: 23,
      answerArr: [],
    },
    {
      id: 24,
      answerArr: [],
    },
    {
      id: 25,
      answerArr: [],
    },
    {
      id: 26,
      answerArr: [],
    },
    {
      id: 27,
      answerArr: [],
    },
    {
      id: 28,
      answerArr: [],
    },
    {
      id: 29,
      answerArr: [],
    },
    {
      id: 30,
      answerArr: [],
    },
    {
      id: 31,
      answerArr: [],
    },
    {
      id: 32,
      answerArr: [],
    },
    {
      id: 33,
      answerArr: [],
    },
    {
      id: 34,
      answerArr: [],
    },
    {
      id: 35,
      answerArr: [],
    },
    {
      id: 36,
      answerArr: [],
    },
    {
      id: 37,
      answerArr: [],
    },
    {
      id: 38,
      answerArr: [],
    },
    {
      id: 39,
      answerArr: [],
    },
    {
      id: 40,
      answerArr: [],
    },
    {
      id: 41,
      answerArr: [],
    },
    {
      id: 42,
      answerArr: [],
    },
    {
      id: 43,
      answerArr: [],
    },
    {
      id: 44,
      answerArr: [],
    },
    {
      id: 45,
      answerArr: [],
    },
    {
      id: 46,
      answerArr: [],
    },
    {
      id: 47,
      answerArr: [],
    },
    {
      id: 48,
      answerArr: [],
    },
    {
      id: 49,
      answerArr: [],
    },
    {
      id: 50,
      answerArr: [],
    }
  ]

  getAll() {
    return this.answers;
  }

  constructor() {}

}
