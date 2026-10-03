import { Component } from '@angular/core';
import { SectionBadge } from '../../shared/components/section-badge/section-badge';

@Component({
  selector: 'app-blog',
  imports: [SectionBadge],
  templateUrl: './blog.html',
  styleUrl: './blog.css',
})
export class Blog {}
