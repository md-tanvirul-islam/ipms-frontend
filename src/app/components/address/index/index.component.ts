import { Component, OnInit } from '@angular/core';
import { ApiCommunicationService } from 'src/app/Services/api-communication.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  public addresses: any;
  public error: any;

  constructor(
    private apiCommunicationService: ApiCommunicationService
  ) { }

  ngOnInit(): void {
    this.addressIndex();
  }

  addressIndex() {
    return this.apiCommunicationService.addressIndex()
    .subscribe({
      next: (response: any) => {
        this.addresses = response.data
      },
      error: (response : any) => {
        this.error = response.error.error
      },
    });
  }
}
