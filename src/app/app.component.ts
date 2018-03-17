import {Component, OnInit} from '@angular/core';
import {PostService} from './shared/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  post: {
    title: string;
    description: string;
  };

  posts: Array<{
    title: string;
    description: string;
  }> = [];

  status: string;
  msg: any;

  constructor(
    private postService: PostService
  ) { }

  ngOnInit() {
    this.getAllPosts();
  }

  getAllPosts() {
    this.postService.getAllPosts()
      .then((res) => {
        this.posts = res.posts;
      })
      .catch((err) => this.showInfo(err, true))
    this.post = {
      title: 'Title 1',
      description: 'This is a description.'
    };
  }

  onSubmit() {
    this.postService.createPost(this.post)
      .then(res => {
        this.getAllPosts();
      })
      .catch(err => this.showInfo(err, true));
  }

  showInfo(msg: any, err?: boolean) {
    this.msg = msg;
    this.status = err ? 'FAILED' : 'OK';
  }

}
