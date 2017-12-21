import {Component, OnInit, Output, Input, EventEmitter} from '@angular/core';
import {UserEventInfo} from '../../../entities/event-info';
import {CreateEventService} from '../../services/create-event.service';

@Component({
  selector: 'app-create-event-basic',
  templateUrl: './create-event-basic.component.html',
  styleUrls: ['./create-event-basic.component.styl']
})

export class CreateEventBasicComponent implements OnInit {
  @Input() basicInfoFormGroup;
  @Output() firstStepData = new EventEmitter<object>();
  dateValidation = false;
  incrementedEventStartDate: any;
  showInterval = false;
  minDate = new Date();
  maxDate = new Date(+this.minDate + 31536000000);
  userEventBasicInfo = new UserEventInfo();

  constructor(private service: CreateEventService) {
  }

  ngOnInit() {
  }

  getEventLat(coordinates: any[]) {
    const addressTest: string[] = [];
    if (this.userEventBasicInfo && coordinates[2]) {
      this.userEventBasicInfo.eventCoordinates = coordinates;
      addressTest.length = 0;
      this.userEventBasicInfo.addressLatitude = coordinates[0];
      this.userEventBasicInfo.addressLongitude = coordinates[1];
      coordinates[2].address_components.forEach(address =>
        addressTest.unshift(address.long_name)
      );
      this.userEventBasicInfo.addressOfEvent = addressTest.reverse().join();
    }
  }

  addExactDate(date) {
    this.userEventBasicInfo.exactDate = date.value;
  }

  addStartTime(time) {
    this.userEventBasicInfo.startTime = time.timeStamp;
    if (this.userEventBasicInfo.exactDate && this.userEventBasicInfo.startTime) {
      this.dateValidation = true;
    }
  }

  customInterval(): void {
    this.showInterval = !this.showInterval;
  }

  minInterval(date): void {
    this.incrementedEventStartDate = new Date(+date.value + 86400000);
    this.userEventBasicInfo.eventStartDate = date.value;
    if (this.userEventBasicInfo.eventStartDate && !this.userEventBasicInfo.startTime) {
      this.dateValidation = true;
    }
  }

  maxInterval(date): void {
    this.userEventBasicInfo.eventFinishDate = date.value;
  }

  addForm(data) {
    this.userEventBasicInfo.eventName = data.eventName;
    if (this.showInterval) {
      this.userEventBasicInfo.exactDate = null;
      this.userEventBasicInfo.startTime = null;
      this.userEventBasicInfo.finishTime = null;
    }
    if (!this.showInterval) {
      this.userEventBasicInfo.startTime = data.startTime;
      this.userEventBasicInfo.finishTime = data.finishTime;
      this.userEventBasicInfo.eventStartDate = null;
      this.userEventBasicInfo.eventFinishDate = null;
    }
    this.firstStepData.emit({variable: 'isBasicFormValid', value: this.userEventBasicInfo,
      eventCoordinates: this.userEventBasicInfo.eventCoordinates});
  }
}
