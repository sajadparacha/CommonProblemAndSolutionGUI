import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { ApplicationListService } from '../application-list/application-list.service';
import { Subject } from 'rxjs';
import { CommonProblemService } from '../common-problem/common-problem.service';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  application = {
    "applicationId": "",
    "applDescription": "",
    "applName": ""
  };
  applicationListChanged = new Subject<void>();
  applicationToBeEdited=new Subject<void>();
  applicationList: any;
  http: HttpClient;
  commonProblemService:CommonProblemService;


  deleteApplication(applicationId: any) {
    this.http.delete('/applicationController/' + applicationId).subscribe(
      (response: any) => {
        console.log("application deleted");
        console.log(response);
        this.fetchApplicationList();
      }
    );
  }
  
  constructor(http: HttpClient,commonProblemService:CommonProblemService

  ) {
    this.http = http;
    this.commonProblemService=commonProblemService;
    }


  fetchApplication(applicationId: any) {
    
    this.http.get('/applicationController/' + applicationId).subscribe(
      (response: any) => {
        this.application = response;
        console.log("application from service");
        console.log(this.application);
        console.log("application");
        this.applicationToBeEdited.next();
      }
    );

  }
  getApplication() {
    return this.application;
  }
  
  saveApplication(application: any) {

    this.http.post('/applicationController/', application).subscribe(
      (response: any) => {
        this.application = response;
        console.log("application from service");
        console.log(this.application);
        console.log("application");
   
        this.fetchApplicationList();
      }
    );
  }

  fetchApplicationList() {

    this.http.get('/applicationController/allApplications/')
      .subscribe((response: any) => {
        this.applicationList = response;

        console.log("applicationList from service");
        console.log(this.applicationList);
        console.log("applicationList");
        this.applicationListChanged.next();

      });



  }

  fetchProblems(applicationId:any){
    this.commonProblemService.fetchCommonProblemListForApplication(applicationId);
  }
  getProblemsSubject(){
    return this.commonProblemService.problemListChanged;
  }
  getApllicationList() {
    return this.applicationList;
  }

}
