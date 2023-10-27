// import { Injectable } from '@angular/core';
// import { HttpClient, HttpResponse } from '@angular/common/http';

// import { map } from 'rxjs/operators';
// import { Subject } from 'rxjs';
// import { ApplicationService } from '../application/application.service';


// @Injectable({
//   providedIn: 'root'
// })
// export class ApplicationListService {
//   http: HttpClient;
//   applicationListChanged= new Subject<void>();
//   applicationService:ApplicationService;
//   constructor(http: HttpClient,applicationService:ApplicationService) 
  
//   { 
//     this.http = http; 
//     this.applicationService=applicationService;
//   }
//   applicationList :any;
//   // =

//   // [
//   //   { "applicationId": 1, "applDescription": "CSAS", "applName": "Cement Slurry Application", "commonProblems": [{ "commonProblemId": 1, "problemDesc": "Problem", "problemSearchTags": [], "solutions": [{ "solutionId": 1, "solDescription": "solution", "seqNumber": 1 }] }] },
//   //   { "applicationId": 2, "applDescription": "BRAVO", "applName": "Drilling Best Practices", "commonProblems": [{ "commonProblemId": 2, "problemDesc": "Problem", "problemSearchTags": [], "solutions": [{ "solutionId": 2, "solDescription": "solution", "seqNumber": 1 }] }] },
//   //   { "applicationId": 3, "applDescription": "DIOR", "applName": "Drilling Reports", "commonProblems": [{ "commonProblemId": 3, "problemDesc": "Problem", "problemSearchTags": [], "solutions": [{ "solutionId": 3, "solDescription": "solution", "seqNumber": 1 }] }] },
//   //   { "applicationId": 4, "applDescription": "EWellFile", "applName": "Well File Attachment", "commonProblems": [{ "commonProblemId": 4, "problemDesc": "Problem", "problemSearchTags": [], "solutions": [{ "solutionId": 4, "solDescription": "solution", "seqNumber": 1 }] }] },
//   //   { "applicationId": 5, "applDescription": "SADK", "applName": "SADK", "commonProblems": [{ "commonProblemId": 5, "problemDesc": "Problem", "problemSearchTags": [], "solutions": [{ "solutionId": 5, "solDescription": "solution", "seqNumber": 1 }] }] }
//   // ]
//   ;
//   fetchApplicationList(){

//     this.http.get('/applicationController/allApplications/')
//     .subscribe((response: any) => {
//       this.applicationList = response;
    
//     console.log("applicationList from service");
//     console.log(this.applicationList);
//     console.log("applicationList");
//     this.applicationListChanged.next();
     
//     });

   

//   }
//   getApllicationList(){
//     return this.applicationList;
//   }
  
//   deleteApplication(applicationId:any){
//     this.applicationService.deleteApplication(applicationId);
//     this.fetchApplicationList();
//   }

// }
