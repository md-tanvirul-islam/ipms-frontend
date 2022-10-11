import { Component, OnInit } from '@angular/core';
import { ApiCommunicationService } from 'src/app/Services/api-communication.service';
import { faPencilRuler } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  public addresses: any;
  public error: any;
  public faPencilRuler = faPencilRuler;

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

  serialNumber(i: number): number {
    return ++i;
  }
}
