import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomBtnComponent } from './custom-btn.component';

describe('CustomBtnComponent', () => {
  let component: CustomBtnComponent;
  let fixture: ComponentFixture<CustomBtnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomBtnComponent]
    });
    fixture = TestBed.createComponent(CustomBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
