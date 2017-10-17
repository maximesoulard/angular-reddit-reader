import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubredditContentComponent } from './subreddit-content.component';

describe('SubredditContentComponent', () => {
  let component: SubredditContentComponent;
  let fixture: ComponentFixture<SubredditContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubredditContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubredditContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
