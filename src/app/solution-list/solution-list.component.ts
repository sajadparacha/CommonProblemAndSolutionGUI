import { Component, OnInit } from '@angular/core';

import { SolutionService } from '../solution/solution.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-solution-list',
  templateUrl: './solution-list.component.html',
  styleUrls: ['./solution-list.component.scss']
})
export class SolutionListComponent implements OnInit {


  solutionService: SolutionService;
  solutionList: any;
  solution = {
    "solutionId": 1,
    "solDescription": "solution",
    "seqNumber": 1
  };
  //application/:applicationId/commonProblem/:commonProblemId/commonSolutions
  applicationId:any;
  commonProblemId:any;

  constructor(solutionService: SolutionService,private activeRoute: ActivatedRoute,
    private router: Router) {
    this.solutionService = solutionService;
    //problemMap.commonProblem.solutions.length
  }

  ngOnInit(): void {
    this.applicationId=this.activeRoute.snapshot.params['applicationId'];
    this.commonProblemId=this.activeRoute.snapshot.params['commonProblemId'];
    console.log('IFetching SolutionList Component for application '+this.applicationId+'  and commmon Problem '+this.commonProblemId);


     //If solution list from service in not  null then show this list on the page

    this.solutionList = this.solutionService.fetchSolutionForGivenProblem(this.commonProblemId);
    this.solutionService.solutionListChanged.subscribe(
      ()=>{
        this.solutionList=this.solutionService.getSolutionList();
      }
    );

    // //If solution list from service in not  null then show this list on the page
    // if (this.solutionService.getSolutionList() != null) {
    //   this.solutionList = this.solutionService.getSolutionList();
    // }
    // this.solutionService.solutionListChanged.subscribe(
    //   ()=>{
    //     this.solutionList=this.solutionService.getSolutionList();
    //   }
    // );
    //We only want to load Solutions if respective common problem is selected
    // else {
    //   if (this.solutionList == null) {
    //     this.solutionService.fetchSolutionList();
    //     this.solutionService.solutionListChanged.subscribe(
    //       () => {
    //         this.solutionList = this.solutionService.getSolutionList();
    //       }
    //     );
    //   }
    // }
  }



  deleteSolution(solutionId: any) {
    this.solutionService.deleteSolution(solutionId);
  }
  editSolution(solutionId: any) {
    this.solutionService.fetchSolution(solutionId);

  }


}
