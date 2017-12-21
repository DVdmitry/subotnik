import {Validators} from '@angular/forms';

export class BasicInfoConfig {
  basicInfoConfig = {
    eventName: ['', Validators.compose([Validators.required,
      Validators.minLength(2)])],
    exactDate: [{value: '', disabled: true}, Validators.nullValidator],
    startTime: ['', Validators.nullValidator],
    finishTime: ['', Validators.nullValidator],
    eventStartDate: [{value: '', disabled: true}, Validators.nullValidator],
    eventFinishDate: [{value: '', disabled: true}, Validators.nullValidator],
    showInterval: false
  };
}
