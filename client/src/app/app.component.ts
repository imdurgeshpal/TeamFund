import { Component, OnInit } from '@angular/core';
import { PartyManagerApiService } from './services/api/party-manager-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private partyManagerApiService: PartyManagerApiService) { }
  ngOnInit() {
  }
}
