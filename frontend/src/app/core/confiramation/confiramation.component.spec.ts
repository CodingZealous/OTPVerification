import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiramationComponent } from './confiramation.component';

describe('ConfiramationComponent', () => {
  let component: ConfiramationComponent;
  let fixture: ComponentFixture<ConfiramationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfiramationComponent]
    });
    fixture = TestBed.createComponent(ConfiramationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
