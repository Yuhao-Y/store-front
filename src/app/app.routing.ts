import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {MyAccountComponent} from './components/my-account/my-account.component';
import {MyprofileComponent} from "./components/myprofile/myprofile.component";
import {BookListComponent} from './components/book-list/book-list.component';
import {BookDetailComponent} from "./components/book-detail/book-detail.component";

const appRoutes: Routes = [
	{
		path :'',
		redirectTo:'/home',
		pathMatch: 'full'
	},
	{
		path: 'home',
		component: HomeComponent
	},
  {
    path: 'myAccount',
    component: MyAccountComponent
  },
  {
    path:'myProfile',
    component:MyprofileComponent
  },
  {
    path : 'bookList',
    component : BookListComponent
  },
  {
    path : 'bookDetail/:id',
    component : BookDetailComponent
  }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
