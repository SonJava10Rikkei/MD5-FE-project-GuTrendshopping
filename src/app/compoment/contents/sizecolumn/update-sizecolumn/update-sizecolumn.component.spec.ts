import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSizecolumnComponent } from './update-sizecolumn.component';

describe('UpdateSizecolumnComponent', () => {
  let component: UpdateSizecolumnComponent;
  let fixture: ComponentFixture<UpdateSizecolumnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateSizecolumnComponent]
    });
    fixture = TestBed.createComponent(UpdateSizecolumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
