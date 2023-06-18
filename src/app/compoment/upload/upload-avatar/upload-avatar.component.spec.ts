import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadAvatarComponent } from './upload-avatar.component';

describe('UploadAvatarComponent', () => {
  let component: UploadAvatarComponent;
  let fixture: ComponentFixture<UploadAvatarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UploadAvatarComponent]
    });
    fixture = TestBed.createComponent(UploadAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
