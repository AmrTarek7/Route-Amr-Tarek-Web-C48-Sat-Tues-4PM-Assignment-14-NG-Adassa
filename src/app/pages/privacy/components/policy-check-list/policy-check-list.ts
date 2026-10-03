import { Component, Input } from '@angular/core';
import { PolicyCheckItem } from '../../privacy';

@Component({
  selector: 'app-policy-check-list',
  imports: [],
  templateUrl: './policy-check-list.html',
  styleUrl: './policy-check-list.css',
})
export class PolicyCheckList {
  @Input({ required: true }) items!: PolicyCheckItem[];
}
