import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonProblemService {
  saveCommonProblem(commonProblem:any) {

    this.http.post(this.commonProblemUrl,commonProblem).subscribe(
      (response:any)=>{
        console.log("common problem saved");
        this.fetchCommonProblemList();
      } 
    );
  }
  http:HttpClient;
  commonProblemList:any;
  commonProblem:any;
  problemListChanged=new Subject<void>();
  commonProblemChanged=new Subject<void>();
  
  commonProblemUrl:string='/commonProblemController/';
  constructor(http:HttpClient) {this.http=http }

  fetchCommonProblemList(){
    
    this.http.get(this.commonProblemUrl+'/allCommonProblems').subscribe(
      (response:any)=>{
        console.log("common problem list fetched");
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
    return this.commonProblem;
  }

  fetchCommonProblem(commonProblemId:any){
    this.http.get(this.commonProblemUrl+commonProblemId).subscribe(
      (response:any)=>{
        console.log("common problem fetched");
        this.commonProblem=response;
        console.log(this.commonProblem);
        this.commonProblemChanged.next();
      }
    );
  }
  deleteCommonProblem(commonProblemId:any){
    this.http.delete(this.commonProblemUrl+commonProblemId).subscribe(
      (response:any)=>{
        console.log("common problem deleted");
        this.fetchCommonProblemList();
      }
    );
  }
  
}
