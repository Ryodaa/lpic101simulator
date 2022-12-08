import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExamComponent } from './exam/exam.component';
import { HomeComponent } from './home/home.component';
import { InputComponent } from './input/input.component';
import { LearnModeComponent } from './learn-mode/learn-mode.component';
import { MultipleChoiceComponent } from './multiple-choice/multiple-choice.component';
import { ResultsComponent } from './results/results.component';
import { SingleChoiceComponent } from './single-choice/single-choice.component';
import { TestModeComponent } from './test-mode/test-mode.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'testmode', component: TestModeComponent },
  { path: 'exam', component: ExamComponent },
  { path: 'learn', component: LearnModeComponent },
  { path: 'results', component: ResultsComponent },
  { path: 'multi', component: MultipleChoiceComponent },
  { path: 'single', component: SingleChoiceComponent },
  { path: 'typeIn', component: InputComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
