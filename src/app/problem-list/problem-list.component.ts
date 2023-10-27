import { Component, OnInit } from '@angular/core';

import { CommonProblemService } from '../common-problem/common-problem.service';

@Component({
  selector: 'app-problem-list',
  templateUrl: './problem-list.component.html',
  styleUrls: ['./problem-list.component.scss']
})
export class ProblemListComponent implements OnInit {
  
  
  
  commonProblemService:CommonProblemService;
  constructor( commonProblemService:CommonProblemService){
    this.commonProblemService=commonProblemService;
  }
  ngOnInit(): void {
    this.problemList=this.commonProblemService.fetchCommonProblemList();
    this.commonProblemService.problemListChanged.subscribe(
      ()=>{
        this.problemList=this.commonProblemService.getProblemList();
      }
    )  

  }
  deleteCommonProblem (commonProblemId:any){
    this.commonProblemService.deleteCommonProblem(commonProblemId);
  }
  editCommonProblem(commonProblemId:any){
    this.commonProblemService.fetchCommonProblem(commonProblemId);
    
  }
  problemList :any;


}
