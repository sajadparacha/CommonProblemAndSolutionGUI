import { Component, OnInit } from '@angular/core';
import { CommonProblemService } from './common-problem.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
@Component({
  selector: 'app-common-problem',
  templateUrl: './common-problem.component.html',
  styleUrls: ['./common-problem.component.scss']
})
export class CommonProblemComponent implements OnInit {

  commonProblem = {
    "commonProblemId": "",
    "applicationId":"",
    "problemDesc": "",
    // '["problemSearchTags": [],
    // "solutions": [
    //   {
    //     "solutionId": "",
    //     "solDescription": "solution",
    //     "seqNumber": ""
    //   }
    // ]]'
  };
  commonProblemMap:any;
  applicationId:any;
  
  commonProblemService: CommonProblemService;
  constructor(commonProblemService: CommonProblemService,private activeRoute: ActivatedRoute,
    private router: Router) { this.commonProblemService = commonProblemService; }

  ngOnInit(): void {
    this.applicationId=this.activeRoute.snapshot.params['applicationId'];

    this.commonProblemService.commonProblemChanged.subscribe (
      ()=>{
        this.commonProblemMap=this.commonProblemService.getCommonProblem();
      }
    
      
    );
    //throw new Error('Method not implemented.');
  }
  onSubmit(submitedForm:any){

    console.log(submitedForm);
    this.commonProblem=submitedForm.value;
    this.commonProblem.applicationId=this.applicationId;
    //Check if this is a save request 
    this.commonProblemService.saveCommonProblem(this.commonProblem);
    
  }
  onClear(form:NgForm){  
    form.reset();
    //this.commonProblemService.commonProblemChanged.next();
  }

}
