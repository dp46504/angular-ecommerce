import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartItemRowComponent } from './cart-item-row.component';

describe('CartItemRowComponent', () => {
  let component: CartItemRowComponent;
  let fixture: ComponentFixture<CartItemRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartItemRowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartItemRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
