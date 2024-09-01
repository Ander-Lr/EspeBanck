import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeletePasswordPage } from './delete-password.page';

describe('DeletePasswordPage', () => {
  let component: DeletePasswordPage;
  let fixture: ComponentFixture<DeletePasswordPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletePasswordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
