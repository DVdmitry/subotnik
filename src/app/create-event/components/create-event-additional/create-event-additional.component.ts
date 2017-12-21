import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import {UserEventInfo} from '../../../entities/event-info';
import {Router} from '@angular/router';
import {CreateEventService} from '../../services/create-event.service';


@Component({
  selector: 'app-create-event-additional',
  templateUrl: './create-event-additional.component.html',
  styleUrls: ['./create-event-additional.component.styl']
})
export class CreateEventAdditionalComponent implements OnInit {
  @Output() additionalStepData = new EventEmitter<object>();
  eventDetailFormGroup: FormGroup;
  userAddInfo = new UserEventInfo();
  @ViewChild('placePicture') placePictVariable: any;
  isPlacePicture = false;
  // map variables
  meetingCoordinates: any[] = [];
  addressTest: string[] = [];
  meetingLatitude = false;
  sliderConfig: any;
  getToPlace = '';
  whatToDo = '';
  equipment = '';
  smthElse = '';
  constructor(private _fB: FormBuilder, private router: Router, private service: CreateEventService) { }

  ngOnInit() {
    this.eventDetailFormGroup = this._fB.group(this.service.getAdditionalConfig().additionalInfoConfig);
    this.service.currentAdditionalEventSliderConfig.subscribe(data => this.sliderConfig = data.config);
  }

  setPlacePicture(file) {
    this.service.setPhoto(file, 'toolTipPlacePict', this.placePictVariable, this.userAddInfo, 'placePicture', this.isPlacePicture);
  }

  removePlacePicture() {
    this.placePictVariable.nativeElement.value = '';
    this.userAddInfo.placePicture = null;
  }

  getMeetingLat(coordinates: any[]) {
    if (this.userAddInfo && coordinates && coordinates[2].length !== 0) {
      this.meetingCoordinates = coordinates;
      this.addressTest.length = 0;
      this.userAddInfo.meetingPlaceLatitude = coordinates[0];
      this.meetingLatitude = true;
      this.userAddInfo.meetingPlaceLongitude = coordinates[1];
      coordinates[2].address_components.forEach(address =>
        this.addressTest.unshift(address.long_name)
      );
      this.userAddInfo.meetingPlace = this.addressTest.join();
    }
  }
  getMinPeople(data): void {
    this.service.getMinPeople(data, this.sliderConfig, this.userAddInfo);
  }

  getMaxPeople(data): void {
    this.service.getMaxPeople(data, this.sliderConfig, this.userAddInfo);
  }
  goPrevious(data) {
    data.preventDefault();
  }

  addFormDataDetails(data): void {
    this.service.addForm(data, this.userAddInfo);
    this.userAddInfo.meetingCoordinates = this.meetingCoordinates;
    this.additionalStepData.emit({variable: 'previe', value: this.userAddInfo});
    this.service.changeEventSliderConfig(this.sliderConfig);
    this.router.navigate(['/preview']);
  }
}
