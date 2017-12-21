import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { UserEventInfo } from '../../../../entities/event-info';
import {CreateEventService} from '../../../services/create-event.service';
import {ContactArray} from '../../../../data/contacts';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-create-event-contact-citizen',
  templateUrl: './create-event-contact-citizen.component.html',
  styleUrls: ['./create-event-contact-citizen.component.styl']
})
export class CreateEventContactCitizenComponent implements OnInit {
  contactArrays: ContactArray;
  @Input() isCompany;
  @Input() contactForm;
  @Output() disableForm = new EventEmitter<object>();
  @Output() contactStepData = new EventEmitter<object>();
  @ViewChild('contactPhoto') contactPhotoVar: any;
  userEventContactInfo = new UserEventInfo();
  // flags
  isContactPhoto = false;
  showIcon = false;
  showAddIcon = false;

  constructor(protected _fB: FormBuilder, protected service: CreateEventService) { }

  ngOnInit() {
    this.service.currentContactsArrays.subscribe(contacts => this.contactArrays = contacts);
  }
  addFormData(data): void {
    this.service.addForm(data, this.userEventContactInfo);
    this.contactStepData.emit({variable: 'isContactFormValid', value: this.userEventContactInfo});
    this.service.changeContactArrays(this.contactArrays);
    }
  isOppositeFormDisable(data, str): void {
    this.disableForm.emit({variable: str, value: data.contactName.length > 2});
  }

  setContactPhoto(file) {
    this.service.setPhoto(file, 'toolTipContact', this.contactPhotoVar, this.userEventContactInfo, 'contactPhoto', this.isContactPhoto);
  }

  removeContactPhoto() {
    this.contactPhotoVar.nativeElement.value = '';
    this.userEventContactInfo.contactPhoto = null;
  }

  showTelIcon(data) {
    if (data.target.value.length === 9 && this.contactArrays.tels.length < 3) {
      this.showIcon = true;
    }
  }

  showAddTelIcon(data, index) {
    if (data.target.value.length === 9 && this.contactArrays.tels.length < 3) {
      this.showAddIcon = true;
    }
  }
  removeTelField(data, index) {
    this.contactArrays.tels.splice(index, 1);
  }
  addSiteField(data): void {
    if (this.contactArrays.sites.length < 5) {
      this.contactArrays.sites = [];
      for (let i = 0; i < 5; i++) {
        if (data['siteAdd' + i]) {
          this.contactArrays.sites.push(data['siteAdd' + i]);
        }
      }
    }
  }
  addTelField(data) {
    if (this.contactArrays.tels.length < 3) {
      this.contactArrays.tels = [];
      for (let i = 0; i < 3; i++) {
        if (data['telNumberAdd' + i]) {
          this.contactArrays.tels.push(data['telNumberAdd' + i]);
        }
      }
    }
  }
}
