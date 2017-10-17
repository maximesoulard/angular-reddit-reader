import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingSubredditsComponent } from './trending-subreddits.component';

describe('TrendingSubredditsComponent', () => {
  let component: TrendingSubredditsComponent;
  let fixture: ComponentFixture<TrendingSubredditsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrendingSubredditsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendingSubredditsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
