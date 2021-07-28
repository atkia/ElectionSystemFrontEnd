import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreezeElectionComponent } from './freeze-election.component';

describe('FreezeElectionComponent', () => {
  let component: FreezeElectionComponent;
  let fixture: ComponentFixture<FreezeElectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreezeElectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreezeElectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
