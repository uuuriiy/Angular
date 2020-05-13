import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AllPostsComponent} from './components/all-posts/all-posts.component';
import {PostResolveService} from './services/post-resolve.service';


// const routes: Routes = [
//   {
//     path: '',
//     children: [
//       {
//         // user/100/posts
//         path: ':id/posts',
//         component: AllPostsComponent // AllUserComponent.html -> router-outlet
//       }
//     ]
//   }
// ];


const routes: Routes = [
  {
    path: '',
    component: AllPostsComponent,
    resolve: { allPosts: PostResolveService }
  },
  {
    path: ':id/posts',
    component: AllPostsComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostModuleRoutingModule { }