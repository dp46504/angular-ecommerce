import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RowItemSkeletonComponent } from './row-item-skeleton.component';

describe('RowItemSkeletonComponent', () => {
  let component: RowItemSkeletonComponent;
  let fixture: ComponentFixture<RowItemSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RowItemSkeletonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RowItemSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
