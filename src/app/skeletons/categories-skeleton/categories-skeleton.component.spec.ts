import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesSkeletonComponent } from './categories-skeleton.component';

describe('CategoriesSkeletonComponent', () => {
  let component: CategoriesSkeletonComponent;
  let fixture: ComponentFixture<CategoriesSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriesSkeletonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriesSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
