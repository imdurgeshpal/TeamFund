import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PartyManager } from 'src/app/models';
import { apiUrl } from 'src/app/shared/constants/api-constant';

@Injectable({
  providedIn: 'root'
})
export class PartyManagerApiService {

  constructor(private httpClient: HttpClient) { }

  getAllPartyManagers(): Observable<PartyManager[]> {
    return this.httpClient.get<PartyManager[]>(apiUrl.partyManager.getAllPartyManagers);
  }

  newPartyManager(partyManager: PartyManager): Observable<void> {
    return this.httpClient.post<void>(apiUrl.partyManager.newPartyManager, partyManager);
  }
}
