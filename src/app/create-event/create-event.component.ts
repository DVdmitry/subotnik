import { Component, OnInit } from '@angular/core';
import { UserEventInfo } from '../entities/event-info';
import { CreateEventService} from './services/create-event.service';
import {FormBuilder, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.styl']
})
export class CreateEventComponent implements OnInit {
  isLinear = true;
  eventInfo: UserEventInfo;
  basicInfoFormGroup: FormGroup;
  contactFormGroup: FormGroup;

  constructor(protected _fB: FormBuilder, private service: CreateEventService) {
   }

  ngOnInit() {
      this.service.currentEvent.subscribe(event => this.eventInfo = event);
    this.basicInfoFormGroup = this._fB.group(this.service.getBasicConfig().basicInfoConfig);
    this.contactFormGroup = this._fB.group(this.service.getContactConfig().contactInfoConfig);


  }
  getFormData(data) {
    console.log(data);
    this.eventInfo = Object.assign(this.eventInfo, data.value);
    this[data.variable] = true;
    if (data.eventCoordinates) {
      this.eventInfo.eventCoordinates = data.value.eventCoordinates;
    }
    if (data.meetingCoordinates) {
      this.eventInfo.meetingCoordinates = data.value.meetingCoordinates;
    }
    this.service.changeEventInfo(this.eventInfo);
  }
}


