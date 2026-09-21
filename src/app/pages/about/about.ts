import { Component } from '@angular/core';
import { AboutHero } from './components/about-hero/about-hero';
import { ValuesSection } from './components/values-section/values-section';
import { TeamSection } from './components/team-section/team-section';
import { ContactCta } from './components/contact-cta/contact-cta';

@Component({
  selector: 'app-about',
  imports: [AboutHero, ValuesSection, TeamSection, ContactCta],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {}
