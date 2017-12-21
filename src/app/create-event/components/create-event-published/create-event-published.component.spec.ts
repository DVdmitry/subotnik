import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEventPublishedComponent } from './create-event-published.component';

describe('CreateEventPublishedComponent', () => {
  let component: CreateEventPublishedComponent;
  let fixture: ComponentFixture<CreateEventPublishedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateEventPublishedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEventPublishedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
