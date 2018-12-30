import { Component, OnInit } from '@angular/core';
import { PartyManagerApiService } from '../services/api/party-manager-api.service';
import { PartyManager } from '../models';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {

  partyManagers: PartyManager[];
  constructor(private partyManagerApiService: PartyManagerApiService) { }

  ngOnInit() {
    this.partyManagerApiService.getAllPartyManagers().subscribe(
      (partyManagers: PartyManager[]) => {
        this.partyManagers = partyManagers;
      });
  }
}
