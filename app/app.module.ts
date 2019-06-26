import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector, INJECTOR } from '@angular/core';

import{RouterModule,Routes} from '@angular/router'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BlogViewComponent } from './blog-view/blog-view.component';
import { BlogCreateComponent } from './blog-create/blog-create.component';
import { BlogEditComponent } from './blog-edit/blog-edit.component';
//import { NOTFOUND } from 'dns';
import {HttpClientModule} from '@angular/common/http';
import { AboutComponent } from './about/about.component';
import { NotfoundcomponentComponent } from './notfoundcomponent/notfoundcomponent.component';
import { BlogService } from './blog.service';
import { BloghttpService } from './bloghttp.service';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogViewComponent,
    BlogCreateComponent,
    BlogEditComponent,
    AboutComponent,
    NotfoundcomponentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
    {path:'home',component:HomeComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'about',component:AboutComponent},
  {path:'blog/:blogId',component:BlogViewComponent}, 
  {path:'create',component:BlogCreateComponent},
  {path : 'edit/:blogId',component:BlogEditComponent},
   {path :'**',component:NotfoundcomponentComponent}  
])
  ],
  providers: [BlogService,BloghttpService],
  bootstrap: [AppComponent]
})
export class AppModule {



 }
