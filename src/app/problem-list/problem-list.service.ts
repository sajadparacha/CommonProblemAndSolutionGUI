// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Subject } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class ProblemListService {
//   http:HttpClient;
//   problemListChanged= new Subject<void>();
//   problemList :any;

//   constructor(http:HttpClient) {
//     this.http=http;
//    }

//    fetchProblemList(){
//     this.http.get('/commonProblemController/allCommonProblems/').subscribe
//     ((response: any) => {
//       this.problemList = response;
//       console.log("problemList from service");
//       console.log(this.problemList);
//       console.log("problemList");
//       this.problemListChanged.next();
//      })
//   };

//   getProblemList(){

//     return this.problemList;
//   }
// }
