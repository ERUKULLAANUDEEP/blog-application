//importing Component, OnInit  libraries from angular core 
import { Component, OnInit, OnDestroy } from '@angular/core';
import { BlogService } from '../blog.service';
import { BloghttpService } from '../bloghttp.service';

//decorators
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})

export class HomeComponent implements OnInit,OnDestroy {
  public allBlogs=[];
constructor(public bloghttpservice:BloghttpService) { 
console.log("home component constructor called");
}

ngOnInit() {
  this.allBlogs=this.bloghttpservice.getallBlogs().subscribe(
   data=>{
     console.log(data);
     this.allBlogs=data["data"];
   },
   error=>{
     console.log("some error occured");
     console.log(error.error)
   }
)
console.log(this.allBlogs);

  
}
ngOnDestroy() {
}
}
