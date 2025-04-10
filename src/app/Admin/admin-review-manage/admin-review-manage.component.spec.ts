import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminReviewManageComponent } from './admin-review-manage.component';

describe('AdminReviewManageComponent', () => {
  let component: AdminReviewManageComponent;
  let fixture: ComponentFixture<AdminReviewManageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminReviewManageComponent]
    });
    fixture = TestBed.createComponent(AdminReviewManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
