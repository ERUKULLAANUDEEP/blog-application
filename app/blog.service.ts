import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class BlogService {
  public currentBlog: { "BlogId": string; "lastModified": string; "created": string; "tags": any[]; "author": string; "category": string; "isPublished": boolean; "views": number; "bodyHtml": string; "description": string; "title": string; };
  public allBlogs = [
    {
      "BlogId": "1",
      "lastModified": "2019-06-20T12:20:47.0542",
      "created": "2019-06-20T12:20:47.0542",
      "tags": [],
      "author": "Admin",
      "category": "Comedy",
      "isPublished": true,
      "views": 0,
      "bodyHtml": "this is blog body",
      "description": "this is blog 1 description",
      "title": "this is first blog"
    },
    {
      "BlogId": "2",
      "lastModified": "2019-06-20T12:20:47.0542",
      "created": "2017-10-20T12:20:47.0542",
      "tags": [],
      "author": "Admin",
      "category": "Comedy",
      "isPublished": true,
      "views": 0,
      "bodyHtml": "this is second blog body",
      "description": "this is blog 2 description",
      "title": "this is second blog"
    },
    {
      "BlogId": "3",
      "lastModified": "2019-06-20T12:20:47.0542",
      "created": "2017-10-20T12:20:47.0542",
      "tags": [],
      "author": "Admin",
      "category": "Comedy",
      "isPublished": true,
      "views": 0,
      "bodyHtml": "this is third blog body",
      "description": "this is blog 3 description",
      "title": "this is third blog "
    }

  ]
  constructor() { }
 
}