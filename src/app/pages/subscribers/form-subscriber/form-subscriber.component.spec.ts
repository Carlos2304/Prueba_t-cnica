import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSubscriberComponent } from './form-subscriber.component';

describe('FormSubscriberComponent', () => {
  let component: FormSubscriberComponent;
  let fixture: ComponentFixture<FormSubscriberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormSubscriberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormSubscriberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
