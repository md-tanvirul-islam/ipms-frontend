import { Component, OnInit } from '@angular/core';
import { ApiCommunicationService } from 'src/app/Services/api-communication.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  public audits: any;
  public error: any;

  constructor(
    private apiCommunicationService: ApiCommunicationService
  ) { }

  ngOnInit(): void {
    this.auditIndex();
  }

  auditIndex() {
    return this.apiCommunicationService.auditIndex()
    .subscribe({
      next: (response: any) => {
        this.audits = response.data
      },
      error: (response : any) => {
        this.error = response.error.error
      },
    });
  }

}
