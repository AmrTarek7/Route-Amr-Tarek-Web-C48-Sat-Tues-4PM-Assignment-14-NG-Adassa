import { Component, Input } from '@angular/core';
import { photographer } from '../../team-section';

@Component({
  selector: 'app-team-member-card',
  imports: [],
  templateUrl: './team-member-card.html',
  styleUrl: './team-member-card.css',
})
export class TeamMemberCard {
  @Input({ required: true }) member!: photographer;
}
