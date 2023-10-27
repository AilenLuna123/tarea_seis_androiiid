import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgeDeterminationPage } from './age-determination.page';

describe('AgeDeterminationPage', () => {
  let component: AgeDeterminationPage;
  let fixture: ComponentFixture<AgeDeterminationPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AgeDeterminationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
