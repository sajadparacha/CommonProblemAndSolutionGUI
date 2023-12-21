import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonProblemService {
  saveCommonProblem(commonProblem:any) {
    //If problemId is not present than this is a new record to be inserted
    if(commonProblem.commonProblemId==null || commonProblem.commonProblemId==""){
        this.http.post(this.commonProblemUrl+'/application/'+commonProblem.applicationId,commonProblem).subscribe(
          (response:any)=>{
            
            console.log("common problem saved");
            //this.fetchCommonProblemList(commonProblem.applicationId);
            this.fetchCommonProblemListForApplication(commonProblem.applicationId);
          } 
        );
    } else{
      //Else it is update request and we should call patch service
      this.http.patch(this.commonProblemUrl,commonProblem).subscribe(
        (response:any)=>{
          console.log("common problem updated  "+response);
          //this.fetchCommonProblemList();
          this.fetchCommonProblemListForApplication(commonProblem.applicationId);
        } 
      );
    }


  }
  http:HttpClient;
  commonProblemList:any;
  commonProblemMap:any;
  commonProblemId:any;
  applicationId:any;
  problemListChanged=new Subject<void>();
  commonProblemChanged=new Subject<void>();
  
  commonProblemUrl:string='/commonProblemController/';
  constructor(http:HttpClient) {this.http=http }

  // fetchCommonProblemList(){
    
  //   this.http.get(this.commonProblemUrl+'/allCommonProblems').subscribe(
  //     (response:any)=>{
  //       console.log("common problem list fetched");
  //       this.commonProblemList=response;
  //       console.log(this.commonProblemList);
        
  //       this.problemListChanged.next();
  //     }
  //   );
  // }

  fetchCommonProblemListForApplication(applicationId:any){
    this.applicationId=applicationId;
    this.http.get(this.commonProblemUrl+'/application/'+applicationId).subscribe(
      (response:any)=>{
        console.log("common problem list fetched for application "+applicationId);
        this.commonProblemList=response;
        console.log(this.commonProblemList);
        
        this.problemListChanged.next();
      }
    );


  }
  getProblemList(){

    return this.commonProblemList;
  }
  getCommonProblem(){
    return this.commonProblemMap;
  }

  fetchCommonProblem(commonProblemId:any){
    this.commonProblemId=commonProblemId;
    this.http.get(this.commonProblemUrl+commonProblemId).subscribe(
      (response:any)=>{
        console.log("common problem fetched");
        this.commonProblemMap=response;
        console.log(this.commonProblemMap);
        this.commonProblemChanged.next();
      }
    );
  }
deleteCommonProblem(commonProblemId:any){
    this.http.delete(this.commonProblemUrl+commonProblemId).subscribe(
      (response:any)=>{
        console.log("common problem deleted");
        this.fetchCommonProblemListForApplication(this.applicationId);
      }
    );
  }
  
}
