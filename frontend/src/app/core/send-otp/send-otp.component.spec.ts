import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendOTPComponent } from './send-otp.component';

describe('SendOTPComponent', () => {
  let component: SendOTPComponent;
  let fixture: ComponentFixture<SendOTPComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SendOTPComponent]
    });
    fixture = TestBed.createComponent(SendOTPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
