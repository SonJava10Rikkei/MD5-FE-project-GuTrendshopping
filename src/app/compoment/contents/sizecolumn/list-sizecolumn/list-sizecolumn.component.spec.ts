import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSizecolumnComponent } from './list-sizecolumn.component';

describe('ListSizecolumnComponent', () => {
  let component: ListSizecolumnComponent;
  let fixture: ComponentFixture<ListSizecolumnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListSizecolumnComponent]
    });
    fixture = TestBed.createComponent(ListSizecolumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
