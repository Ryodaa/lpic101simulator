import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExamComponent } from './exam/exam.component';
import { HomeComponent } from './home/home.component';
import { InfoBoxComponent } from './info-box/info-box.component';
import { LearnModeComponent } from './learn-mode/learn-mode.component';
import { TestModeComponent } from './test-mode/test-mode.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'testmode', component: TestModeComponent },
  { path: 'exam', component: ExamComponent },
  { path: 'learn', component: LearnModeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
