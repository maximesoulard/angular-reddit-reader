import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ms-detailed-post',
  templateUrl: './detailed-post.component.html',
  styleUrls: ['./detailed-post.component.css']
})
export class DetailedPostComponent implements OnInit {
  @Input() post: Post;

  constructor() { }

  ngOnInit() {
  }

}
