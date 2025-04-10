import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminInventoryManageComponent } from './admin-inventory-manage.component';

describe('AdminInventoryManageComponent', () => {
  let component: AdminInventoryManageComponent;
  let fixture: ComponentFixture<AdminInventoryManageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminInventoryManageComponent]
    });
    fixture = TestBed.createComponent(AdminInventoryManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
