import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-section-badge',
  imports: [],
  templateUrl: './section-badge.html',
  styleUrl: './section-badge.css',
})
export class SectionBadge {
  @Input({ required: true }) badgeTitle!: string;
  @Input() badgeIcon!: string;
}
