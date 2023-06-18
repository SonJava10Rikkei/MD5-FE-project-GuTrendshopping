import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadOutputComponent } from './dad-output.component';

describe('DadOutputComponent', () => {
  let component: DadOutputComponent;
  let fixture: ComponentFixture<DadOutputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DadOutputComponent]
    });
    fixture = TestBed.createComponent(DadOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
