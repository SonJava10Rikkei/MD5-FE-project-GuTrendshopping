import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserIndexComponent } from './user-index.component';

describe('HomeIndexComponent', () => {
  let component: UserIndexComponent;
  let fixture: ComponentFixture<UserIndexComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserIndexComponent]
    });
    fixture = TestBed.createComponent(UserIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
