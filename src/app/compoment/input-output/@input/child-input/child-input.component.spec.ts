import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildInputComponent } from './child-input.component';

describe('ChildInputComponent', () => {
  let component: ChildInputComponent;
  let fixture: ComponentFixture<ChildInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildInputComponent]
    });
    fixture = TestBed.createComponent(ChildInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
