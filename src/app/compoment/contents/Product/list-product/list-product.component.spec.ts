import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProductComponent } from './list-product.component';

describe('PageProductComponent', () => {
  let component: ListProductComponent;
  let fixture: ComponentFixture<ListProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListProductComponent]
    });
    fixture = TestBed.createComponent(ListProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
