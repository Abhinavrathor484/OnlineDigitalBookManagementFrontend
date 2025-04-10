import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBooksManageComponent } from './admin-books-manage.component';

describe('AdminBooksManageComponent', () => {
  let component: AdminBooksManageComponent;
  let fixture: ComponentFixture<AdminBooksManageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminBooksManageComponent]
    });
    fixture = TestBed.createComponent(AdminBooksManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
