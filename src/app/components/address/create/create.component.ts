import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { ApiCommunicationService } from 'src/app/Services/api-communication.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  public form = {
    ip: null,
    label: null
  };

  public errors : {ip: string, label: string} = {
    ip: '',
    label: ''
  };

  constructor(
    private apiCommunicationService: ApiCommunicationService,
    private notifierService: NotifierService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    return this.apiCommunicationService.addressStore(this.form)
    .subscribe({
      next: (response: any) => {
        if (response.status === 'Success') {
          this.notifierService.notify('success', response.message);
        }
        return this.router.navigateByUrl('/address/index');
      },
      error: (response: any) => {
        if (response.status == 422) {
          this.errors = response.error.data
        } else {
          this.notifierService.notify('error', response.statusText);
        }
      },
    });
  }
}
