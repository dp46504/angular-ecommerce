import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartTableSkeletonComponent } from './cart-table-skeleton.component';

describe('CartTableSkeletonComponent', () => {
  let component: CartTableSkeletonComponent;
  let fixture: ComponentFixture<CartTableSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartTableSkeletonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartTableSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
