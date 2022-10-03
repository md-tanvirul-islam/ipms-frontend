import { Component, OnInit } from '@angular/core';
import { ApiCommunicationService } from 'src/app/Services/api-communication.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public profile: any;
  public error: any;

  constructor(
    private apiCommunicationService: ApiCommunicationService
  ) { }

  ngOnInit(): void {
    this.profileData();
  }

  profileData() {
    return this.apiCommunicationService.profile()
    .subscribe({
      next: (response: any) => {
        this.profile = response.data
        console.log(this.profile);
      },
      error: (response : any) => {
        this.error = response.error.error
      },
    });
  }

}
