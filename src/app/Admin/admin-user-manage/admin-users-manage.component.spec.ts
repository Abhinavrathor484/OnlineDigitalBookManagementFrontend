import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUsersManageComponent } from './admin-users-manage.component';

describe('AdminUserManageComponent', () => {
  let component: AdminUsersManageComponent;
  let fixture: ComponentFixture<AdminUsersManageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminUsersManageComponent]
    });
    fixture = TestBed.createComponent(AdminUsersManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
