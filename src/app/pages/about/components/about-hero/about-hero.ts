import { Component } from '@angular/core';
import { SectionBadge } from '../../../../shared/components/section-badge/section-badge';

export interface Stat {
  icon: string;
  value: string;
  label: string;
}

@Component({
  selector: 'app-about-hero',
  imports: [SectionBadge],
  templateUrl: './about-hero.html',
  styleUrl: './about-hero.css',
})
export class AboutHero {
  stats: Stat[] = [
    {
      icon: 'fa-solid fa-users',
      value: '+2مليون',
      label: 'قارئ شهرياً',
    },
    {
      icon: 'fa-solid fa-newspaper',
      value: '+500',
      label: 'مقالة منشورة',
    },
    {
      icon: 'fa-solid fa-pen-nib',
      value: '+50',
      label: 'كاتب خبير',
    },
    {
      icon: 'fa-solid fa-book-open',
      value: '+15',
      label: 'تصنيف',
    },
  ];
}
