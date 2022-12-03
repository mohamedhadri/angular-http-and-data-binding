import { Component,OnChanges,SimpleChanges  } from '@angular/core';
import { PostService } from './post.service';
import {HttpResponse} from "@angular/common/http";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  empArr:any[]=[]
  posts: any[] = [];
  title = 'httpAndDataBinding';
   


  constructor(private postService: PostService){
    this.postService.getPosts().subscribe((res: HttpResponse<any>) => {
      this.posts = res.body;
      console.log(this.posts)
    })
  }

  // ngOnChanges( changes: SimpleChanges) {
  //   console.log(changes);
  //  this.btnClicked()
  // }
    btnClicked() {
    this.empArr= this.posts
  }
  
 
}

