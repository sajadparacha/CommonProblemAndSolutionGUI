import { Component, OnInit } from '@angular/core';

import { CommonProblemService } from '../common-problem/common-problem.service';
import { SolutionService } from '../solution/solution.service';
import { ActivatedRoute, Route, Router } from '@angular/router';


@Component({
  selector: 'app-problem-list',
  templateUrl: './problem-list.component.html',
  styleUrls: ['./problem-list.component.scss']
})
export class ProblemListComponent implements OnInit {
  
  
  
  commonProblemService:CommonProblemService;
  solutionService:SolutionService;
  applicationId:any;
  constructor( commonProblemService:CommonProblemService,solutionService:SolutionService
    ,private activeRoute: ActivatedRoute,
    private router: Router
   
    ){
    this.commonProblemService=commonProblemService;
    this.solutionService=solutionService;
    //get the applcation id from rout params
    
    //console.log("this.route.snapshot.params['applicationId']  "+this.route.snapshot.params['applicationId']);
  }
  ngOnInit(): void {
    this.applicationId=this.activeRoute.snapshot.params['applicationId'];
    console.log("Fetching problems for appplicationid = "+this.applicationId);
    //If there is a list show it on screen
    
    //if(this.commonProblemService.getProblemList()!=null){
      this.problemList=this.commonProblemService.fetchCommonProblemListForApplication(this.applicationId);
      this.commonProblemService.problemListChanged.subscribe(
        ()=> {
          this.problemList=this.commonProblemService.getProblemList();
          console.log("problemList"+this.problemList);
        }
      );

    //}
    //If there is no list ,get it from server
    //We only want to load Common Problems if a related applicaction is selected
    // else{ 
    // this.problemList=this.commonProblemService.fetchCommonProblemList();
    // this.commonProblemService.problemListChanged.subscribe(
    //   ()=>{
    //     this.problemList=this.commonProblemService.getProblemList();
    //   }
    // )  
    // }

  }
  deleteCommonProblem (commonProblemId:any){
    this.commonProblemService.deleteCommonProblem(commonProblemId);
  }
  editCommonProblem(commonProblemId:any){
    this.commonProblemService.fetchCommonProblem(commonProblemId);
    
  }

  showSolutions(problemId:any,applicationId:any){
    this.solutionService.fetchSolutionForGivenProblem(problemId);
    //Once teh Solutions are fetched nevigate to solutions component
    this.solutionService.solutionListChanged.subscribe(
      () => {
        //navigate to solution list page
       // this.router.navigate(['/commonSolution/commonProblem/'+problemId]);
       //this.router.navigate(['/application/'+applicationId+'/commonProblem/'+problemId+'/commonSolutions']);
       this.router.navigate(['/commonProblem/'+problemId+'/commonSolutions']);
       
      }
    );

  }
  problemList :any;


}
