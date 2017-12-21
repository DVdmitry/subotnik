import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared/shared.module';
import {AppMaterialModule} from '../app-material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {CreateEventService} from './services/create-event.service';

import {CreateEventBasicComponent} from './components/create-event-basic/create-event-basic.component';
import {CreateEventAdditionalComponent} from './components/create-event-additional/create-event-additional.component';
import {CreateEventContactComponent} from './components/create-event-contact/create-event-contact.component';
import {CreateEventEditComponent} from './components/create-event-edit/create-event-edit.component';
import {CreateEventPreviewComponent} from './components/create-event-preview/create-event-preview.component';
import {CreateEventComponent} from './create-event.component';
import {CreateEventContactCompanyComponent} from './components/create-event-contact/create-event-contact-company/create-event-contact-company.component';
import {CreateEventContactCitizenComponent} from './components/create-event-contact/create-event-contact-citizen/create-event-contact-citizen.component';
import {CreateEventPublishedComponent} from './components/create-event-published/create-event-published.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    AppMaterialModule,
    RouterModule.forChild([
      // {
      //   path: '',
      //   component: CreateEventComponent,
      //   children: [{
      //     path: '',
      //     pathMatch: 'full',
      //     component: CreateEventBasicComponent
      //   },
      //     {
      //       path: 'contact',
      //       component: CreateEventContactComponent
      //     },
      //     {
      //       path: 'additional',
      //       component: CreateEventAdditionalComponent
      //     },
      {
        path: 'preview',
        component: CreateEventPreviewComponent
      },
      {
        path: 'edit',
        component: CreateEventEditComponent
      },
      {
        path: 'published',
        component: CreateEventPublishedComponent
      }
    ])
  ],
  declarations: [
    CreateEventComponent,
    CreateEventBasicComponent,
    CreateEventAdditionalComponent,
    CreateEventContactComponent,
    CreateEventEditComponent,
    CreateEventPreviewComponent,
    CreateEventContactCompanyComponent,
    CreateEventContactCitizenComponent,
    CreateEventPublishedComponent],
  providers: [CreateEventService]
})
export class CreateEventModule {
}
