import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApplicationComponent } from './application/application.component';
import { CommonProblemComponent } from './common-problem/common-problem.component';
import { SolutionComponent } from './solution/solution.component';
import { ProblemSearchTagsComponent } from './problem-search-tags/problem-search-tags.component';
import { ApplicationListComponent } from './application-list/application-list.component';
import { ProblemListComponent } from './problem-list/problem-list.component';
import { SolutionListComponent } from './solution-list/solution-list.component';
import { ApplicationService } from './application/application.service';

import { SolutionListService } from './solution-list/solution-list.service';
import { FormsModule } from '@angular/forms';
import { CommonProblemService } from './common-problem/common-problem.service';

@NgModule({
  declarations: [
    AppComponent,
    ApplicationComponent,
    CommonProblemComponent,
    SolutionComponent,
    ProblemSearchTagsComponent,
    ApplicationListComponent,
    ProblemListComponent,
    SolutionListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ApplicationService,CommonProblemService,SolutionListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
