import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BanUserComponent } from './ban-user.component';

describe('BanUserComponent', () => {
  let component: BanUserComponent;
  let fixture: ComponentFixture<BanUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BanUserComponent]
    });
    fixture = TestBed.createComponent(BanUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
