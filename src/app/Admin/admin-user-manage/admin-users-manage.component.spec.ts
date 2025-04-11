import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUserManageComponent } from './admin-users-manage.component';

describe('AdminUserManageComponent', () => {
  let component: AdminUserManageComponent;
  let fixture: ComponentFixture<AdminUserManageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminUserManageComponent]
    });
    fixture = TestBed.createComponent(AdminUserManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
