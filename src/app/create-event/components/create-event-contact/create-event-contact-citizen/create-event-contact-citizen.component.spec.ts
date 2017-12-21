import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEventContactCitizenComponent } from './create-event-contact-citizen.component';

describe('CreateEventContactCitizenComponent', () => {
  let component: CreateEventContactCitizenComponent;
  let fixture: ComponentFixture<CreateEventContactCitizenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateEventContactCitizenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEventContactCitizenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
