import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonProblemComponent } from './common-problem.component';

describe('CommonProblemComponent', () => {
  let component: CommonProblemComponent;
  let fixture: ComponentFixture<CommonProblemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommonProblemComponent]
    });
    fixture = TestBed.createComponent(CommonProblemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
