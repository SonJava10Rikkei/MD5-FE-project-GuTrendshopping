import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildOutputComponent } from './child-output.component';

describe('ChildOutputComponent', () => {
  let component: ChildOutputComponent;
  let fixture: ComponentFixture<ChildOutputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildOutputComponent]
    });
    fixture = TestBed.createComponent(ChildOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
