import { Component, Input, OnInit } from '@angular/core';
import { CreateEventContactCitizenComponent } from '../create-event-contact-citizen/create-event-contact-citizen.component';
import {Validators} from '@angular/forms';

@Component({
  selector: 'app-create-event-contact-company',
  templateUrl: './create-event-contact-company.component.html',
  styleUrls: ['./create-event-contact-company.component.styl']
})
export class CreateEventContactCompanyComponent extends CreateEventContactCitizenComponent implements OnInit {
  @Input() isCitizen;
  companyConfig = Object.assign({}, this.service.getContactConfig().contactInfoConfig,
    {personToContact: ['', Validators.compose([Validators.required, Validators.minLength(4)])]} );

  ngOnInit() {
    this.contactForm = this._fB.group(this.companyConfig);
    this.service.currentContactsArrays.subscribe(contacts => this.contactArrays = contacts);
  }
}
