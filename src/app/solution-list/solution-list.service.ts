// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Subject } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class SolutionListService {
//   solutionList :any;
//   http:HttpClient;
//   solutionListChanged= new Subject<void>();  
//   constructor(http:HttpClient) {this.http=http; }
  
//   fetchSolutionList(){
//     this.http.get('/solutionController/allSolutions/').subscribe(
//       (response: any) => {
//       this.solutionList = response;
//       console.log("solutionList from service");
//       console.log(this.solutionList);
//       console.log("solutionList");
//       this.solutionListChanged.next();
//       }
//       );
     
//   }
//   getSolutionList(){
//     return this.solutionList;
//   }
// }
