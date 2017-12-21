import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEventContactCompanyComponent } from './create-event-contact-company.component';

describe('CreateEventContactCompanyComponent', () => {
  let component: CreateEventContactCompanyComponent;
  let fixture: ComponentFixture<CreateEventContactCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateEventContactCompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEventContactCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
