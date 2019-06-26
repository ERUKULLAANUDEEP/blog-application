import { Injectable } from '@angular/core';
//importing http client to make the requests
import {HttpClient} from '@angular/common/http';
import { observable } from "rxjs";
//import 'rxjs/add/operator/catch';
import 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BloghttpService {
public allBlogs;
public currentBlog;
public baseurl='https://blogapp.edwisor.com/api/v1/blogs';
public authToken="MDFhYTRmZDU0YjhmNTJkYzM3MGJmYTc2MWNkZjM0ZjE4ZWQ3ZDNhZDE4N2ZjMTA0ZmVjOTU1OWJiYmMyNzY5OTZiYTg5ODBlNzgyYWNmYmU3YWI3ZmI0MTI3ZmZiMmEzMzA4NDA4Yzc2ZTk5MTJjNThkOGYxZDI0ZGEzNjRmZTdhOQ==";
constructor(private _http:HttpClient) { 
  console.log("blog-http service was called");
}
public getSingleBlogInformation(currentBlogId: string): any {
let myrespnose=this._http.get(this.baseurl+'/view'+'/'+currentBlogId+'?authToken='+this.authToken);
return myrespnose;  
}
   public getallBlogs(): any {
    let myrespnose=this._http.get(this.baseurl+'/all?authToken='+this.authToken);
    console.log(myrespnose)
    return myrespnose;
  }
}
