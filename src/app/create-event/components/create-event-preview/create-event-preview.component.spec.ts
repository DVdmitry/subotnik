import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEventPreviewComponent } from './create-event-preview.component';

describe('CreateEventPreviewComponent', () => {
  let component: CreateEventPreviewComponent;
  let fixture: ComponentFixture<CreateEventPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateEventPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEventPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
