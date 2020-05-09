import {Component, OnInit} from '@angular/core';
import {PostService} from 'src/app/services/post.service';
import {Post} from 'src/app/models/post.model';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts: Post[] = [];
  isLoading = false;
  private postsSub: Subscription;

  constructor(public postService: PostService) {
  }

  ngOnInit() {
    this.isLoading = true;
    this.postService.getPosts();
    this.postService.getPostUpdateListener()
      .subscribe((posts: Post[]) => {
        this.isLoading = false;
        this.posts = posts;
      });
  }

  onDelete(postId: string) {
    this.postService.deletePost(postId);
  }

  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }

}// end class
