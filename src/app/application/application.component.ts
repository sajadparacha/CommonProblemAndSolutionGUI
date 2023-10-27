import { Component, OnInit } from '@angular/core';
import { ApplicationService } from './application.service';
@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss']
})
export class ApplicationComponent implements OnInit{

  applicationService: ApplicationService;
  application={"applicationId":"","applDescription":"","applName":""};
  constructor(applicationService: ApplicationService){
    this.applicationService=applicationService;
    
  }
  ngOnInit(): void {
    //this.application=this.applicationService.getApplication();
    
    // throw new Error('Method not implemented.');
    this.applicationService.applicationToBeEdited.subscribe(

      ()=>{
        // this.applicationService.getApplication();
        this.onEdit(this.applicationService.getApplication());
      }
    );
  }
  
  onSubmit(submitedForm:any){

    console.log(submitedForm.value);
    this.application=submitedForm.value;
    this.applicationService.saveApplication(this.application);
  }
  
  onEdit(application:any){
    console.log("application from application");
    console.log(application);
    this.application=application;
    
  }

  clearForm(){
    this.application={"applicationId":"","applDescription":"","applName":""};
  }
}
