import { Injectable } from '@angular/core';
import { UserEventInfo } from '../../entities/event-info';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import {AdditionalInfoConfig} from '../../data/forms-config/event-additional-form-config';
import {ContactInfoConfig} from '../../data/forms-config/event-contact-form-config';
import {BasicInfoConfig} from '../../data/forms-config/event-basic-form-config';
import {ContactArray} from '../../data/contacts';
import {AdditionalEventSliderConfig} from '../../data/additional-event-slider-config';

@Injectable()
export class CreateEventService {
  //
  basicInfoConfig = new BasicInfoConfig();
  contactInfoConfig = new ContactInfoConfig();
  additionalInfoConfig = new AdditionalInfoConfig();
  //
  event = new UserEventInfo();
  private eventInfo = new BehaviorSubject<UserEventInfo>(this.event);
  currentEvent = this.eventInfo.asObservable();
  //
  contactArray = new ContactArray();
  private contactArrayInit = new BehaviorSubject<ContactArray>(this.contactArray);
  currentContactsArrays = this.contactArrayInit.asObservable();
  //
  addEventSliderConfig = new AdditionalEventSliderConfig();
  private addEventSliderConfigInit = new BehaviorSubject<AdditionalEventSliderConfig>(this.addEventSliderConfig);
  currentAdditionalEventSliderConfig = this.addEventSliderConfigInit.asObservable();
  constructor() { }
  changeEventInfo(data: UserEventInfo) {
    this.eventInfo.next(data);
  }
  changeContactArrays(contacts: ContactArray) {
    this.contactArrayInit.next(contacts);
  }
  changeEventSliderConfig(data: AdditionalEventSliderConfig) {
    this.addEventSliderConfigInit.next(data);
  }
  getBasicConfig(): BasicInfoConfig {
    return this.basicInfoConfig;
  }
  getContactConfig(): ContactInfoConfig {
    return this.contactInfoConfig;
  }
  getAdditionalConfig(): AdditionalInfoConfig {
    return this.additionalInfoConfig;
  }
  fillInConfig(config, obj) {
    for (const prop in config) {
      if (obj[prop]) {
        config[prop].shift();
        config[prop].unshift(obj[prop]);
      }
    }
  }
  addForm(config, obj) {
    for (const prop in config) {
      if (prop === 'eventStartDate' || prop === 'eventFinishDate' || prop === 'exactDate' ||
        prop === 'contactPhoto' || prop === 'placePicture') {
        continue;
      } else {
        obj[prop] = config[prop];
      }
    }
  }
  getMinPeople(data, sliderConfig, obj): void {
    if (!obj.maxPeople) {
      sliderConfig.minThumbLabel = true;
      obj.minPeople = data.value;
      sliderConfig.minValue = data.value;
      obj.maxPeople = data.value + 1;
      sliderConfig.maxValue = obj.maxPeople;
    }
    if (data.value < obj.maxPeople) {
      sliderConfig.minThumbLabel = true;
      obj.minPeople = data.value;
      sliderConfig.minValue = data.value;
    }
    if (obj.maxPeople && data.value > obj.maxPeople) {
      sliderConfig.minValue = obj.maxPeople - 1;
      obj.minPeople = sliderConfig.minValue;
      sliderConfig.minThumbLabel = false;
    }
  }

  getMaxPeople(data, sliderConfig, obj): void {
    if (obj.minPeople && data.value < obj.minPeople) {
      sliderConfig.maxThumbLabel = false;
      obj.maxPeople = obj.minPeople + 1;
    } else {
      sliderConfig.maxThumbLabel = true;
      obj.maxPeople = data.value;
    }
  }
  setPhoto(file, toolTip, varViewChild, obj, prop, flag) {
    let errorMessage: any;
    let toolTipContact: any;
    if (file.target.files[0].type !== 'image/jpeg' && !document.querySelector('.errorMessage')) {
      errorMessage = document.createElement('p');
      errorMessage.innerHTML = 'Прикрепите файл с расширением jpeg/jpg';
      errorMessage.setAttribute('class', 'errorMessage');
      toolTipContact = document.querySelector('#' + toolTip);
      toolTipContact.appendChild(errorMessage);
      varViewChild.nativeElement.value = '';
    }
    if (file.target.files[0].type !== 'image/jpeg' && document.querySelector('.errorMessage') !== undefined) {
      varViewChild.nativeElement.value = '';
    }
    if (file.target.files[0].type === 'image/jpeg' && document.querySelector('.errorMessage') !== undefined) {
      obj[prop] = file.target.files[0].name;
      console.log(obj);
      console.log(obj[prop]);
      console.log(file.target.files[0].name);
      flag = true;
      errorMessage = document.querySelector('.errorMessage');
      errorMessage.className = errorMessage.className.replace('errorMessage', 'invisible');
    }
  }
}
