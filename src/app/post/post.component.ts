// import { Reddit } from 'typings/reddit';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ms-post',
  templateUrl: 'post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() post: Post;
  showDetailedPost = false;

  constructor() {}

  ngOnInit() {
    this.post.data.previewUrl = this.searchPreviewImageToDisplay();
  }

  searchPreviewImageToDisplay() {
    if (typeof this.post.data.preview !== 'undefined') {
      return this.post.data.preview.images[0] ? this.post.data.preview.images[0].source.url : undefined;
    }
    return undefined;
  }

  onClickShowDetailedPost() {
    this.showDetailedPost = !this.showDetailedPost;
  }
}

interface Post {
  data: Data;
}

interface Data {
  preview: Preview;
  previewUrl: string;
}

interface Preview {
  images: Image[];
}

interface Image {
  resolutions: Resolution[];
  source: Source;
}

interface Source {
  url: string;
}

interface Resolution {
  url: string;
}