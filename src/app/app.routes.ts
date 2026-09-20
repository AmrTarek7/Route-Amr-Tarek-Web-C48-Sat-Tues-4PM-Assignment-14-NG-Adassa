import { Routes } from '@angular/router';
import { Blog } from './pages/blog/blog';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { NotFound } from './pages/not-found/not-found';
import { Terms } from './pages/terms/terms';
import { Privacy } from './pages/privacy/privacy';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: Home,
    // title: 'Home'
  },
  {
    path: 'blog',
    component: Blog,
    //  title: 'Blog'
  },
  {
    path: 'about',
    component: About,
    //  title: 'About'
  },
  {
    path: 'terms',
    component: Terms,
    //  title: 'Terms'
  },
  {
    path: 'privacy',
    component: Privacy,
    //  title: 'Privacy'
  },
  {
    path: '**',
    component: NotFound,
    //  title: 'Not Found 404'
  },
];
