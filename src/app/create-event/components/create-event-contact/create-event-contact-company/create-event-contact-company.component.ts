import { Component, Input, OnInit } from '@angular/core';
import { CreateEventContactCitizenComponent } from '../create-event-contact-citizen/create-event-contact-citizen.component';

@Component({
  selector: 'app-create-event-contact-company',
  templateUrl: './create-event-contact-company.component.html',
  styleUrls: ['./create-event-contact-company.component.styl']
})
export class CreateEventContactCompanyComponent extends CreateEventContactCitizenComponent implements OnInit {
  @Input() isCitizen;

  ngOnInit() {
    this.service.currentContactsArrays.subscribe(contacts => this.contactArrays = contacts);
  }
}
