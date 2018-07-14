import { Component, OnInit, AfterViewInit, OnChanges } from '@angular/core';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-BI',
  templateUrl: './bi.component.html',
  styleUrls: ['./bi.component.css']
})
export class BIComponent implements OnInit, AfterViewInit {

  title = 'Power BI POC';
  username = 'powerbi@latize.com';
  password = '8Ulysses1';
  clientId = 'bd046d28-2d91-4250-b07d-9488d2f0bf68';
  reportId = '549d8b0e-b29a-4ec4-9f0d-dacdd8f38111';
  groupId = 'cc60019e-33b7-4ff7-85f3-c23f5bb3ef0b';
  embedURL = 'https://app.powerbi.com/reportEmbed?reportId=' + this.reportId + '&groupId=' + this.groupId;
  accessToken;
  flag = false;
  constructor(private api: ApiService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.getToken();
  }

  getToken() {
    this.api.getDashboard('true')
      .subscribe(res => {
        this.accessToken = res.token;
        this.flag = true;
      }, err => {
        console.log(err);
      });

  }
}


