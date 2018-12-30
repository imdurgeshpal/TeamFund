import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PartyManagerApiService } from '../services/api/party-manager-api.service';
import { PartyManager } from '../models';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  signUpForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private partyManagerApiService: PartyManagerApiService) { }

  ngOnInit() {
    this.signUpForm = this.formBuilder.group({
      firstName: '',
      lastName: ''
    });
  }

  onSignUp() {
    const newPartyManager: PartyManager = this.signUpForm.value;
    this.partyManagerApiService.newPartyManager(newPartyManager).subscribe();
  }

}
