import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSizecolumnComponent } from './create-sizecolumn.component';

describe('CreateSizecolumnComponent', () => {
  let component: CreateSizecolumnComponent;
  let fixture: ComponentFixture<CreateSizecolumnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateSizecolumnComponent]
    });
    fixture = TestBed.createComponent(CreateSizecolumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
