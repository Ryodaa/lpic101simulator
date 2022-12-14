import {
  Injectable
} from '@angular/core';
import { Question } from '../#interfaces/question'; 

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
    },
    {
      id: 51,
      answerArr: [],
    },
    {
      id: 52,
      answerArr: [],
    },
    {
      id: 53,
      answerArr: [],
    },
    {
      id: 54,
      answerArr: [],
    },
    {
      id: 55,
      answerArr: [],
    },
    {
      id: 56,
      answerArr: [],
    },
    {
      id: 57,
      answerArr: [],
    },
    {
      id: 58,
      answerArr: [],
    },
    {
      id: 59,
      answerArr: [],
    },
    {
      id: 60,
      answerArr: [],
    },
    {
      id: 61,
      answerArr: [],
    },
    {
      id: 62,
      answerArr: [],
    },
    {
      id: 63,
      answerArr: [],
    },
    {
      id: 64,
      answerArr: [],
    },
    {
      id: 65,
      answerArr: [],
    },
    {
      id: 66,
      answerArr: [],
    },
    {
      id: 67,
      answerArr: [],
    },
    {
      id: 68,
      answerArr: [],
    },
    {
      id: 69,
      answerArr: [],
    },
    {
      id: 70,
      answerArr: [],
    },
    {
      id: 71,
      answerArr: [],
    },
    {
      id: 72,
      answerArr: [],
    },
    {
      id: 73,
      answerArr: [],
    },
    {
      id: 74,
      answerArr: [],
    },
    {
      id: 75,
      answerArr: [],
    },
    {
      id: 76,
      answerArr: [],
    },
    {
      id: 77,
      answerArr: [],
    },
    {
      id: 78,
      answerArr: [],
    },
    {
      id: 79,
      answerArr: [],
    },
    {
      id: 80,
      answerArr: [],
    },
    {
      id: 81,
      answerArr: [],
    },
    {
      id: 82,
      answerArr: [],
    },
    {
      id: 83,
      answerArr: [],
    },
    {
      id: 84,
      answerArr: [],
    },
    {
      id: 85,
      answerArr: [],
    },
    {
      id: 86,
      answerArr: [],
    },
    {
      id: 87,
      answerArr: [],
    },
    {
      id: 88,
      answerArr: [],
    },
    {
      id: 89,
      answerArr: [],
    },
    {
      id: 90,
      answerArr: [],
    },
    {
      id: 91,
      answerArr: [],
    },
    {
      id: 92,
      answerArr: [],
    },
    {
      id: 93,
      answerArr: [],
    },
    {
      id: 94,
      answerArr: [],
    },
    {
      id: 95,
      answerArr: [],
    },
    {
      id: 96,
      answerArr: [],
    },
    {
      id: 97,
      answerArr: [],
    },
    {
      id: 98,
      answerArr: [],
    },
    {
      id: 99,
      answerArr: [],
    },
    {
      id: 100,
      answerArr: [],
    },
    {
      id: 101,
      answerArr: [],
    },
    {
      id: 102,
      answerArr: [],
    },
    {
      id: 103,
      answerArr: [],
    },
    {
      id: 104,
      answerArr: [],
    },
    {
      id: 105,
      answerArr: [],
    },
    {
      id: 106,
      answerArr: [],
    },
    {
      id: 107,
      answerArr: [],
    },
    {
      id: 108,
      answerArr: [],
    },
    {
      id: 109,
      answerArr: [],
    },
    {
      id: 110,
      answerArr: [],
    },
    {
      id: 111,
      answerArr: [],
    },
    {
      id: 112,
      answerArr: [],
    },
    {
      id: 113,
      answerArr: [],
    },
    {
      id: 114,
      answerArr: [],
    },
    {
      id: 115,
      answerArr: [],
    },
    {
      id: 116,
      answerArr: [],
    },
    {
      id: 117,
      answerArr: [],
    },
    {
      id: 118,
      answerArr: [],
    },
    {
      id: 119,
      answerArr: [],
    },
    {
      id: 120,
      answerArr: [],
    }
  ]

  getAll() {
    return this.answers;
  }

  constructor() {}

}
