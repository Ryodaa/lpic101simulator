import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
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
import { FormsModule } from '@angular/forms';
import { PopupComponent } from './popup/popup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressBarModule } from '@angular/material/progress-bar';

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
    ResultsComponent,
    PopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
