import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewResultComponent } from './admin-view-result.component';

describe('AdminViewResultComponent', () => {
  let component: AdminViewResultComponent;
  let fixture: ComponentFixture<AdminViewResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminViewResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminViewResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
