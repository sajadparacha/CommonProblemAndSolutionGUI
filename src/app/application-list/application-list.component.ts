import { Component, OnInit } from '@angular/core';
// import { ApplicationListService } from './application-list.service';
import { ApplicationService } from '../application/application.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-application-list',
  templateUrl: './application-list.component.html',
  styleUrls: ['./application-list.component.scss']
})
export class ApplicationListComponent implements OnInit {

  applicationList: any;
  subscription: any;
  applicationService: ApplicationService;

  constructor(applicationService: ApplicationService,
    private route: ActivatedRoute,
    private router: Router) {
    this.applicationService = applicationService;
  }

  ngOnInit(): void {
    this.applicationList = this.applicationService.fetchApplicationList();

    this.applicationService.applicationListChanged.subscribe(

      () => {
        this.applicationList = this.applicationService.getApllicationList();
      }

    )
  }

  deleteApplication(applicationId: any) {
    this.applicationService.deleteApplication(applicationId);
  }

  editApplication(applicationId: any) {
    this.applicationService.fetchApplication(applicationId);
  }

  showProblems(applicationId: any) {
    this.applicationService.fetchProblems(applicationId);
    //Subscribe to the chnage in CommonProblem list and navigate only once the list has been received
    this.applicationService.getProblemsSubject().
      subscribe(
        () => {
          //console.log("Common Problem List updated , nevigate to Common Problem");
          this.router.navigate(['/application/'+applicationId+'/commonProblems']);

        });

  }
  addProblems(applicationId: any) {
    this.showProblems(applicationId);

  }


  
}
