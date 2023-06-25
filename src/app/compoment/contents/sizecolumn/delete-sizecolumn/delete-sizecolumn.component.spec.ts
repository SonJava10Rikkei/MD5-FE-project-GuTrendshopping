import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteSizecolumnComponent } from './delete-sizecolumn.component';

describe('DeleteSizecolumnComponent', () => {
  let component: DeleteSizecolumnComponent;
  let fixture: ComponentFixture<DeleteSizecolumnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteSizecolumnComponent]
    });
    fixture = TestBed.createComponent(DeleteSizecolumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
