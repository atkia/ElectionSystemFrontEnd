import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndElectionComponent } from './end-election.component';

describe('EndElectionComponent', () => {
  let component: EndElectionComponent;
  let fixture: ComponentFixture<EndElectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EndElectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EndElectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
