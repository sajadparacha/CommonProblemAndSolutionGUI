import { Component, OnInit } from '@angular/core';
// import { ApplicationListService } from './application-list.service';
import { ApplicationService } from '../application/application.service';
@Component({
  selector: 'app-application-list',
  templateUrl: './application-list.component.html',
  styleUrls: ['./application-list.component.scss']
})
export class ApplicationListComponent implements OnInit{

  applicationList :any;
  subscription: any;
    applicationService:ApplicationService;
    
    constructor(applicationService:ApplicationService){
        this.applicationService=applicationService;
    }

  ngOnInit(): void {
    this.applicationList=this.applicationService.fetchApplicationList();
    
    this.applicationService.applicationListChanged.subscribe(

      ()=>{
        this.applicationList=this.applicationService.getApllicationList();
      }
   
      )
  }

  deleteApplication(applicationId:any){
    this.applicationService.deleteApplication(applicationId);
  }

  editApplication(applicationId:any){
    this.applicationService.fetchApplication(applicationId);
  }
    
}
