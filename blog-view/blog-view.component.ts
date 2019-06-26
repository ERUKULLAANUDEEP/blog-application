import { Component, OnInit, OnDestroy } from '@angular/core';
//to identify which blog is pressed to view to capture particular blogid
import { ActivatedRoute, Router, ActivatedRouteSnapshot } from '@angular/router';
import { BlogService } from '../blog.service';
import { BloghttpService } from '../bloghttp.service';
@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css']
})
export class BlogViewComponent implements OnInit,OnDestroy {
  public currentBlog:any;
  constructor(private route: ActivatedRoute,public blogservice:BlogService, private router: Router, public bloghttpservice:BloghttpService) {
    console.log(route);
    console.log("blog view constructor is called");
  }
  ngOnInit() {
    //getting the blog id from route

    let myBlogId = this.route.snapshot.params.get("blogId");
    console.log("Blog view is called");
    this.bloghttpservice.getSingleBlogInformation(myBlogId).subscribe(
      data => {
        console.log(data);
        this.currentBlog=data["data"];
      },
      error => {
        console.log("some error occured");
        console.log(error.errorMessage);
      }

    )
  }
  ngOnDestroy() {
  }

}
