import { Component, Input } from '@angular/core';
import { ValueCardIF } from '../../values-section';

@Component({
  selector: 'app-value-card',
  imports: [],
  templateUrl: './value-card.html',
  styleUrl: './value-card.css',
})
export class ValueCard {
  //
  @Input({ required: true }) value!: ValueCardIF;
}
