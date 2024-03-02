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


import { FormsModule } from '@angular/forms';
import { CommonProblemService } from './common-problem/common-problem.service';
import { SolutionService } from './solution/solution.service';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule, HashLocationStrategy } from '@angular/common';
import { provideRouter } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes = [
{ path: '', component: ApplicationComponent },
// { path: 'commonProblem/application/:id', component: CommonProblemComponent },
// { path: 'commonSolution/commonProblem/:id', component: SolutionComponent },
{ path: 'application/:applicationId/commonProblems', component: CommonProblemComponent },
// { path: 'application/:applicationId/commonProblem/:commonProblemId/commonSolutions', component: SolutionComponent },
{ path: 'commonProblem/:commonProblemId/commonSolutions', component: SolutionComponent },
// { path: '**' , redirectTo:'commonSolution'},
{path: '**', component: PageNotFoundComponent},
];


// const routes = [
//   { path: '', children: [
//     { path: 'commonProblem', component: CommonProblemComponent },
// { path: 'commonSolution', component: SolutionComponent },


//   ]
// },

//    ];
@NgModule({
  declarations: [
    AppComponent,
    ApplicationComponent,
    CommonProblemComponent,
    SolutionComponent,
    ProblemSearchTagsComponent,
    ApplicationListComponent,
    ProblemListComponent,
    SolutionListComponent,
    HeaderComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule, RouterOutlet, RouterLink, RouterLinkActive,
   /*useHash: true ensures there is a hash added to the url so that the Angular router can kick in and resolve the router link
    otherwise there will be no hashtag and the urls will be rendered at server end and will always result isn page not found
   */
    RouterModule.forRoot(routes ,{ useHash: true })

  ],
  providers: [ApplicationService, CommonProblemService, SolutionService,
    //provideRouter(routes)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
