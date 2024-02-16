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
    "seqNumber": "",
    "commonProblemId":""
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
    this.solution.commonProblemId=this.activeRoute.snapshot.params['commonProblemId'];
    console.log("Fetched Problem id from route is "+this.solution.commonProblemId)
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
      //** for some unknown reason this.solution.commonProblemId returns undefined here.However, we have already set it in init???
      console.log("this.solution.commonProblemId used for fetchSolutionForGivenProblem : "+this .commonProblemId);
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
      "seqNumber": "",
      "commonProblemId":this.solution.commonProblemId

      };

  }

  // clearForm(){
  //   this.application={"applicationId":"","applDescription":"","applName":""};
  // }
}
