import {Component, OnInit, ViewChild} from '@angular/core';
import {CreateEventService} from '../../services/create-event.service';
import {UserEventInfo} from '../../../entities/event-info';
import {FormBuilder, FormGroup, FormControl} from '@angular/forms';
import {ContactArray} from '../../../data/contacts';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-event-edit',
  templateUrl: './create-event-edit.component.html',
  styleUrls: ['./create-event-edit.component.styl']
})
export class CreateEventEditComponent implements OnInit {
  contactArrays: ContactArray;
  @ViewChild('contactPhoto') contactPhotoVariable: any;
  @ViewChild('placePicture') placePictVariable: any;
  userEvent: UserEventInfo;
  editForm: FormGroup;
  editInfoConfig: object;
  sliderConfig: any;
  changeEventPlace = false;
  changeMeetingPlace = false;
  minDate = new Date();
  maxDate = new Date(+this.minDate + 31536000000);
  finalDate = new Date();
  // formControls to place time in the datepicker`s field
  exactDate: FormControl;
  startDate: FormControl;
  finishDate: FormControl;
  isCompany: boolean;
  flags = {
    isContactPhoto: 'contactPhoto',
    isPlacePicture: 'placePicture',
    isAboutEvent: 'aboutEvent',
    isGetToPlace: 'getToPlace',
    isWhatToDo: 'whatToDo',
    isEquipment: 'equipment',
    isSmthElse: 'smthElse'
  };

  constructor(private service: CreateEventService, private _fB: FormBuilder, private router: Router) {
  }

  ngOnInit() {
    this.editInfoConfig = Object.assign({}, this.service.getBasicConfig().basicInfoConfig,
    this.service.getContactConfig().contactInfoConfig, this.service.getAdditionalConfig().additionalInfoConfig);
    this.service.currentContactsArrays.subscribe(contacts => this.contactArrays = contacts);
    this.service.currentEvent.subscribe(data => this.userEvent = data);
    this.service.currentAdditionalEventSliderConfig.subscribe(data => this.sliderConfig = data);
    this.fillInConfig();
    this.editForm = this._fB.group(this.editInfoConfig);
    this.exactDate = new FormControl(this.userEvent.exactDate);
    this.startDate = new FormControl(this.userEvent.eventStartDate);
    this.finishDate = new FormControl(this.userEvent.eventFinishDate);
    this.checkFlags(this.flags);
    this.addSiteField(this.userEvent);
    this.addTelField(this.userEvent);
  }

  getLat(coordinates: any[], place, latitude, longitude, coords) {
    const addressTest: string[] = [];
    if (this.userEvent && coordinates[2]) {
      this.userEvent[coords] = coordinates;
      addressTest.length = 0;
      this.userEvent[latitude] = coordinates[0];
      this.userEvent[longitude] = coordinates[1];
      coordinates[2].address_components.forEach(address =>
        addressTest.unshift(address.long_name)
      );
      this.userEvent[place] = addressTest.reverse().join();
    }
  }

  finishDateChange(data, finishDate) {
    if (data.value > finishDate) {
      this.finishDate = new FormControl(new Date(this.userEvent.eventFinishDate.setTime(data.value.getTime() + 1000 * 60 * 60 * 24)));
    }
  }

  changeDate(data, variable) {
      this.userEvent[variable] = data.value;
      this[variable] = new FormControl(data.value);
  }

  correctContactPhoto() {
    this.userEvent.contactPhoto = '';
  }

  setContactPhoto(file) {
    this.service.setPhoto(file, 'toolTipContact', this.contactPhotoVariable, this.userEvent, 'contactPhoto', this.flags.isContactPhoto);
  }

  removeInput(data) {
    data.target.parentNode.style.display = 'none';
  }

  getCrossIcon(data) {
    if (data.target.value.length === 0) {
      data.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.children[1].style.visibility = 'visible';
    }
  }

  correctPlacePicture() {
    this.userEvent.placePicture = '';
  }

  setPlacePicture(file) {
    this.service.setPhoto(file, 'toolTipPlacePict', this.placePictVariable, this.userEvent, 'placePicture', this.flags.isPlacePicture);
  }

  removePlacePicture() {
    this.placePictVariable.nativeElement.value = '';
    this.userEvent.placePicture = null;
  }

  changingPlace(data) {
    this[data] = !this[data];
  }

  checkFlags(flags) {
    for (const prop in flags) {
      if (this.userEvent[flags[prop]]) {
        flags[prop] = this.userEvent[flags[prop]];
      } else {
        flags[prop] = '';
      }
    }
  }
  getMinPeople(data): void {
    this.service.getMinPeople(data, this.sliderConfig, this.userEvent);
  }

  getMaxPeople(data): void {
    this.service.getMaxPeople(data, this.sliderConfig, this.userEvent);
  }
  // добавляем в userEvent данные из формы
  addForm(data) {
    this.service.addForm(data, this.userEvent);
    this.router.navigate(['/preview']);
  }
  // меняем значения в конфигурации формы с пустых, на содержащиеся в userEvent, которые затем отражаются в template
  fillInConfig() {
    this.service.fillInConfig(this.editInfoConfig, this.userEvent);
  }
   // убеждаемся, что все номера находятся в массивах
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
