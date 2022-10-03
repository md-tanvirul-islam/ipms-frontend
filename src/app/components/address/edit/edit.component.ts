import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { ApiCommunicationService } from 'src/app/Services/api-communication.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  public form = {
    ip: null,
    label: null
  };

  public errors : {ip: string, label: string} = {
    ip: '',
    label: ''
  };

  addressId: any;

  constructor(
    private apiCommunicationService: ApiCommunicationService,
    private notifierService: NotifierService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const routeParams = this.activeRoute.snapshot.paramMap;
    this.addressId = Number(routeParams.get('addressId'));
    this.apiCommunicationService.addressFind(this.addressId)
    .subscribe({
      next: (response: any) => {
        console.log(response);
      },
      error: (response: any) => {
        this.notifierService.notify('error', response.statusText);
      },
    });
  }

  onSubmit() {
    return this.apiCommunicationService.addressUpdate(this.form)
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
