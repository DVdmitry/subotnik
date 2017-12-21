import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-create-event-contact',
  templateUrl: './create-event-contact.component.html',
  styleUrls: ['./create-event-contact.component.styl']
})
export class CreateEventContactComponent {
  @Input() contactForm;
  @Output() contactStepData = new EventEmitter<object>();
  isCompanyName = false;
  isCitizenName = false;

  whichTab(data) {
    this[data.variable] = data.value;
  }

  getFormData(data) {
    this.contactStepData.emit(data);
  }
}
