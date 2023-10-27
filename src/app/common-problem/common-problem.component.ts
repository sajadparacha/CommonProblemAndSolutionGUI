import { Component, OnInit } from '@angular/core';
import { CommonProblemService } from './common-problem.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-common-problem',
  templateUrl: './common-problem.component.html',
  styleUrls: ['./common-problem.component.scss']
})
export class CommonProblemComponent implements OnInit {

  commonProblem = {
    "commonProblemId": 1,
    "problemDesc": "Problem",
    "problemSearchTags": [],
    "solutions": [
      {
        "solutionId": 1,
        "solDescription": "solution",
        "seqNumber": 1
      }
    ]
  };
  commonProblemService: CommonProblemService;
  constructor(commonProblemService: CommonProblemService) { this.commonProblemService = commonProblemService; }

  ngOnInit(): void {
    
    this.commonProblemService.commonProblemChanged.subscribe (
      ()=>{
        this.commonProblem=this.commonProblemService.getCommonProblem();
      }
    
      
    );
    //throw new Error('Method not implemented.');
  }
  onSubmit(submitedForm:any){
    console.log(submitedForm);
    this.commonProblem=submitedForm.value;
    this.commonProblemService.saveCommonProblem(this.commonProblem);
  }
  onClear(form:NgForm){  
    form.reset();
    //this.commonProblemService.commonProblemChanged.next();
  }

}
