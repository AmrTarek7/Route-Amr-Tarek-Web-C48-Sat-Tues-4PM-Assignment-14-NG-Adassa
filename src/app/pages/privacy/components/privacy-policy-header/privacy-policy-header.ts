import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-privacy-policy-header',
  imports: [],
  templateUrl: './privacy-policy-header.html',
  styleUrl: './privacy-policy-header.css',
})
export class PrivacyPolicyHeader {
  @Input({ required: true }) id!: string;
  @Input({ required: true }) number!: number;
  @Input({ required: true }) title!: string;
}
