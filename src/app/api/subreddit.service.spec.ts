import { async, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { SubredditService } from './subreddit.service';
import { ApiConstantes } from './api.constantes';
import { TrendingSubreddits } from './model/trendingSubreddits';
import { Post } from './model/post';
import { Data } from './model/childData';
describe('SubredditService', () => {

  let service: SubredditService;
  let http: HttpTestingController;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [SubredditService, ApiConstantes]
  }));

  beforeEach(() => {
    service = TestBed.get(SubredditService);
    http = TestBed.get(HttpTestingController);
  });

  it('should return an Observable of 2 posts for getRAll', async(() => {
    // fake response
    const hardcodedSubredditContent = getMockedPostsFrom([{ title: 'Post 1' }, { title: 'Post 2' }]);

    // call the service
    let actualPosts = [];
    service.getRAll().subscribe(posts => actualPosts = posts);

    // check that the underlying HTTP request was correct
    http.expectOne('https://www.reddit.com/r/all/hot.json')
    // return the fake response when we receive a request
      .flush(hardcodedSubredditContent);

    // check that the returned array is deserialized as expected
    expect(actualPosts.length).toBe(2);
    expect(actualPosts[0].title).toBe('Post 1');
    expect(actualPosts[1].title).toBe('Post 2');
  }));

  it('should return an Observable of 3 posts for get /r/France', async(() => {
    // fake response
    const hardcodedSubredditContent = getMockedPostsFrom([{ title: 'Post 1' }, { title: 'Post 2' }, { title: 'Post 3' }]);

    // call the service
    let actualPosts = [];
    service.get('France', 'new').subscribe(posts => actualPosts = posts);

    // check that the underlying HTTP request was correct
    http.expectOne('https://www.reddit.com/r/France/new.json')
    // return the fake response when we receive a request
      .flush(hardcodedSubredditContent);

    // check that the returned array is deserialized as expected
    expect(actualPosts.length).toBe(3);
    expect(actualPosts[0].title).toBe('Post 1');
    expect(actualPosts[1].title).toBe('Post 2');
    expect(actualPosts[2].title).toBe('Post 3');
  }));

  it('should return an Observable of 2 trending subreddits URL', async(() => {
    // fake response
    const hardcodedTrendings = {subreddit_names: ['TRENDING 1', 'TRENDING 2', 'TRENDING 3']};

    // call the service
    let actualTrendings: any;
    service.getTrendingSubreddits().subscribe(trendings => actualTrendings = trendings);

    // check that the underlying HTTP request was correct
    http.expectOne('https://www.reddit.com/api/trending_subreddits.json')
    // return the fake response when we receive a request
      .flush(hardcodedTrendings);

    // check that the returned array is deserialized as expected
    expect(actualTrendings.subreddit_names.length).toBe(3);
    expect(actualTrendings.subreddit_names[0]).toBe('TRENDING 1');
    expect(actualTrendings.subreddit_names[1]).toBe('TRENDING 2');
    expect(actualTrendings.subreddit_names[2]).toBe('TRENDING 3');
  }));
});

function getMockedPostsFrom(o: Array<any>) {
    return { "data": { "children": o }};
}