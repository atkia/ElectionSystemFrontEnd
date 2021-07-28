import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoterModuleComponent } from './voter-module.component';

describe('VoterModuleComponent', () => {
  let component: VoterModuleComponent;
  let fixture: ComponentFixture<VoterModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoterModuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoterModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
