import {Validators} from '@angular/forms';

export class ContactInfoConfig {
  contactInfoConfig = {
    contactName: ['', Validators.compose([Validators.required, Validators.minLength(2),
      Validators.maxLength(40)])],
    contactPhoto: [''],
    telNumberAdd0: ['', Validators.compose([Validators.required, Validators.minLength(9), Validators.maxLength(9)])],
    telNumberAdd1: ['', Validators.compose([Validators.minLength(9), Validators.maxLength(9)])],
    telNumberAdd2: ['', Validators.compose([Validators.minLength(9), Validators.maxLength(9)])],
    telNumberAdd3: ['', Validators.compose([Validators.minLength(9), Validators.maxLength(9)])],
    usersEmail: ['', Validators.compose([Validators.required, Validators.email, Validators.minLength(5),
      Validators.maxLength(35)])],
    siteAdd0: ['', Validators.minLength(4)],
    siteAdd1: ['', Validators.minLength(4)],
    siteAdd2: ['', Validators.minLength(4)],
    siteAdd3: ['', Validators.minLength(4)],
    siteAdd4: ['', Validators.minLength(4)],
    siteAdd5: ['', Validators.minLength(4)],
    siteAdd6: ['', Validators.minLength(4)],
    aboutEvent: ['', Validators.maxLength(700)],
    personToContact: ['']
  };
}
