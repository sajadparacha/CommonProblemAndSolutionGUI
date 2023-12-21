import { Component, OnInit } from '@angular/core';
import { SolutionService } from './solution.service';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-solution',
  templateUrl: './solution.component.html',
  styleUrls: ['./solution.component.scss']
})
export class SolutionComponent implements OnInit{
  
  solutionService:SolutionService;
  solution={
    "solutionId": "",
    "solDescription": "",
    "seqNumber": ""
    };
    http:HttpClient;
    commonProblemId:any;
    
  constructor (solutionService:SolutionService,http:HttpClient,private activeRoute: ActivatedRoute,
    private router: Router){
    this.solutionService=solutionService;
    this.http=http;
  }
  
  ngOnInit(): void {
    this.commonProblemId=this.activeRoute.snapshot.params['commonProblemId'];
 
    this.solutionService.solutionChanged.subscribe(
      ()=>{
        this.solution=this.solutionService.getSolution();
      }
    );
    
  }
  onSubmit(submitedForm:NgForm){
      console.log(submitedForm);
      this.solution=submitedForm.value;
      this.solutionService.saveSolution(this.solution);
      this.solutionService.fetchSolutionForGivenProblem(this.commonProblemId);

  }

  saveApplication(solution: any) {

    this.http.post('/solutionController/', solution).subscribe(
      (response: any) => {
        this.solution = response;
        console.log("solution from service");
        console.log(this.solution);
        console.log("solution");
   
        
      }
    );
  }

  fetchSolution(solutionId:any){

  }
  clearForm(){
    this.solution={
      "solutionId": "","solDescription": "",
      "seqNumber": ""
      };
    
  }
  
  // clearForm(){
  //   this.application={"applicationId":"","applDescription":"","applName":""};
  // }
}
