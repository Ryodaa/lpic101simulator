import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TestModeComponent } from './test-mode/test-mode.component';
import { MultipleChoiceComponent } from './multiple-choice/multiple-choice.component';
import { QuestionComponent } from './question/question.component';
import { InputComponent } from './input/input.component';
import { ExamComponent } from './exam/exam.component';
import { LearnModeComponent } from './learn-mode/learn-mode.component';
import { QuestionListComponent } from './question-list/question-list.component';
import { InfoBoxComponent } from './info-box/info-box.component';
import { SingleChoiceComponent } from './single-choice/single-choice.component';
import { ResultsComponent } from './results/results.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TestModeComponent,
    MultipleChoiceComponent,
    QuestionComponent,
    InputComponent,
    ExamComponent,
    LearnModeComponent,
    QuestionListComponent,
    InfoBoxComponent,
    SingleChoiceComponent,
    ResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
