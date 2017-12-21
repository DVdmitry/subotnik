import { Component, OnInit, Input } from '@angular/core';
import { CreateEventService } from '../../services/create-event.service';
import { UserEventInfo } from '../../../entities/event-info';

@Component({
  selector: 'app-create-event-preview',
  templateUrl: './create-event-preview.component.html',
  styleUrls: ['./create-event-preview.component.styl']
})
export class CreateEventPreviewComponent implements OnInit {
  userEvent: UserEventInfo;

  constructor(private service: CreateEventService) { }

  ngOnInit() {
    this.service.currentEvent.subscribe(data => this.userEvent = data);
    console.log(this.userEvent);
  }

}
