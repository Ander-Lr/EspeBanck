import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WithdrawalWithoutCardPage } from './withdrawal-without-card.page';

describe('WithdrawalWithoutCardPage', () => {
  let component: WithdrawalWithoutCardPage;
  let fixture: ComponentFixture<WithdrawalWithoutCardPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(WithdrawalWithoutCardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
