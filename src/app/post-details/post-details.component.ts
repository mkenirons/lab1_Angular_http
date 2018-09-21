import { Component, OnInit } from '@angular/core';
import {PostService} from '../services/post.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  title = 'app';
  posts: any = [];

  constructor(private ps:PostService){}

  ngOnInit(){
    console.log("work");
    this.ps.getPostsData().subscribe(data =>
      {
        this.posts = data.posts;
      });
   }
}
