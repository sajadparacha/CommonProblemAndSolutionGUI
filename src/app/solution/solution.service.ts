import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SolutionService {
  getSolution(): any {
    return this.solution;
  }
  solutionUrl='/solutionController/';
  problemId:any;
  fetchSolution(solutionId: any) {
    this.http.get(this.solutionUrl+solutionId).subscribe(
      (response:any)=>{
        console.log("solution fetched");
        this.solution=response;
        console.log(this.solution);
        this.solutionChanged.next();
      }
    );
  }

  fetchSolutionForGivenProblem(problemId:any){
    this.problemId=problemId;
    this.http.get(this.solutionUrl+'/problem/'+problemId+'/allSolutions').subscribe(
      (response:any)=>{
        this.solutionList = response;
        console.log("fetchSolutionForGivenProblem from service");
        console.log(this.solutionList);
        console.log("fetchSolutionForGivenProblem");
        this.solutionListChanged.next();
      }
    );
  }
 
  deleteSolution(solutionId: any) {

      this.http.delete(this.solutionUrl+solutionId).subscribe(
        (response:any)=>{
          console.log("solution deleted");
          this.fetchSolutionForGivenProblem(this.problemId);
        }
      );
      }

  solutionList :any;
  solution:any;
  http:HttpClient;
  solutionListChanged= new Subject<void>(); 
  solutionChanged=new Subject<void>(); 
  constructor(http:HttpClient) {this.http=http; }
  
  // fetchSolutionList(){
  //   this.http.get('/solutionController/allSolutions/').subscribe(
  //     (response: any) => {
  //     this.solutionList = response;
  //     console.log("solutionList from service");
  //     console.log(this.solutionList);
  //     console.log("solutionList");
  //     this.solutionListChanged.next();
  //     }
  //     );
     
  // }
  getSolutionList(){
    return this.solutionList;
  }

  saveSolution(solution:any){
    //** If there is no solutionId that means it is a new record
    if(solution.solutionId==null || solution.solutionId==""){
    this.http.post(this.solutionUrl+'/problem/'+this.problemId,solution).subscribe(

      (response:any)=>{
        console.log("Solution Saved");
        //this.fetchSolutionList();
        // this.fetchSolution(solution.solutionId);
        if(this.problemId!=null){
          this.fetchSolutionForGivenProblem(this.problemId);
        }

      }
    );
    }
    else{
      this.http.patch(this.solutionUrl,solution).subscribe(

        (response:any)=>{
          console.log("Solution Patached");
          //this.fetchSolutionList();
          // this.fetchSolution(solution.solutionId);
          if(this.problemId!=null){
            this.fetchSolutionForGivenProblem(this.problemId);
          }
        }
      );
    }
  }

  // fetchSolution(solutionId:any) {

  //   this.http.get(this.solutionUrl+solutionId)
  //     .subscribe((response: any) => {
  //       this.solution = response;

  //       console.log("soluiton from service");
  //       console.log(this.solution);
  //       console.log("solution");
  //       this.solutionChanged.next();

  //     });



  // }
  getApllicationList() {
    return this.solution;
  }
}
