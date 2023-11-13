import { Component, OnInit } from '@angular/core';

import { SolutionService } from '../solution/solution.service';
@Component({
  selector: 'app-solution-list',
  templateUrl: './solution-list.component.html',
  styleUrls: ['./solution-list.component.scss']
})
export class SolutionListComponent implements OnInit {
  
  
  solutionService:SolutionService;

  constructor(solutionService:SolutionService){
    this.solutionService=solutionService;
  }

  ngOnInit(): void {
    this.solutionService.fetchSolutionList();
    this.solutionService.solutionListChanged.subscribe(
      ()=>{
        this.solutionList=this.solutionService.getSolutionList();
      }
    );

  }

  solutionList :any;
  solution={
    "solutionId": 1,
    "solDescription": "solution",
    "seqNumber": 1
};

  deleteSolution (solutionId:any){
    this.solutionService.deleteSolution(solutionId);
  }
  editSolution(solutionId:any){
    this.solutionService.fetchSolution(solutionId);
    
  } 


}
