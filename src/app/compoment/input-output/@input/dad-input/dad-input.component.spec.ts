import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadInputComponent } from './dad-input.component';

describe('DadInputComponent', () => {
  let component: DadInputComponent;
  let fixture: ComponentFixture<DadInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DadInputComponent]
    });
    fixture = TestBed.createComponent(DadInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
