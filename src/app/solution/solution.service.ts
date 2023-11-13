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
  fetchSolution(solutionId: any) {
    this.http.get('/solutionController/'+solutionId).subscribe(
      (response:any)=>{
        console.log("solution fetched");
        this.solution=response;
        console.log(this.solution);
        this.solutionChanged.next();
      }
    );
  }
  deleteSolution(solutionId: any) {

      this.http.delete('/solutionController/'+solutionId).subscribe(
        (response:any)=>{
          console.log("solution deleted");
          this.fetchSolutionList();
        }
      );
      }

  solutionList :any;
  solution:any;
  http:HttpClient;
  solutionListChanged= new Subject<void>(); 
  solutionChanged=new Subject<void>(); 
  constructor(http:HttpClient) {this.http=http; }
  
  fetchSolutionList(){
    this.http.get('/solutionController/allSolutions/').subscribe(
      (response: any) => {
      this.solutionList = response;
      console.log("solutionList from service");
      console.log(this.solutionList);
      console.log("solutionList");
      this.solutionListChanged.next();
      }
      );
     
  }
  getSolutionList(){
    return this.solutionList;
  }

  saveSolution(solution:any){
    this.http.post('/solutionController/',solution).subscribe(

      (response:any)=>{
        console.log("Solution Submited");
        this.fetchSolutionList();
        // this.fetchSolution(solution.solutionId);

      }
    );
  }

  // fetchSolution(solutionId:any) {

  //   this.http.get('/solutionController/'+solutionId)
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
