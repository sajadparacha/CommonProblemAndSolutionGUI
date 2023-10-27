import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemSearchTagsComponent } from './problem-search-tags.component';

describe('ProblemSearchTagsComponent', () => {
  let component: ProblemSearchTagsComponent;
  let fixture: ComponentFixture<ProblemSearchTagsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProblemSearchTagsComponent]
    });
    fixture = TestBed.createComponent(ProblemSearchTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
