import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewshomeComponent } from './interviewshome.component';

describe('InterviewshomeComponent', () => {
  let component: InterviewshomeComponent;
  let fixture: ComponentFixture<InterviewshomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterviewshomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterviewshomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
