import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatesHomeComponent } from './candidates-home.component';

describe('CandidatesHomeComponent', () => {
  let component: CandidatesHomeComponent;
  let fixture: ComponentFixture<CandidatesHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidatesHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidatesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
