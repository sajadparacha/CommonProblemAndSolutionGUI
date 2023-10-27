import { Component, OnInit } from '@angular/core';
import { SolutionListService } from './solution-list.service';
@Component({
  selector: 'app-solution-list',
  templateUrl: './solution-list.component.html',
  styleUrls: ['./solution-list.component.scss']
})
export class SolutionListComponent implements OnInit {
  
  solutionListService:SolutionListService;

  constructor(solutionListService:SolutionListService){
    this.solutionListService=solutionListService;
  }

  ngOnInit(): void {
    this.solutionListService.fetchSolutionList();
    this.solutionListService.solutionListChanged.subscribe(
      ()=>{
        this.solutionList=this.solutionListService.getSolutionList();
      }
    );

  }

  solutionList :any;



}
