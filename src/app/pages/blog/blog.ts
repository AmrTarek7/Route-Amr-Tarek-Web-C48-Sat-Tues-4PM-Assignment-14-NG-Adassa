import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  imports: [],
  templateUrl: './blog.html',
  styleUrl: './blog.css',
})
export class Blog implements OnInit, OnDestroy {
  ngOnInit(): void {
    console.log('Blog Component Created');
  }

  ngOnDestroy(): void {
    console.log('Blog Component Destroyed');
  }
}
