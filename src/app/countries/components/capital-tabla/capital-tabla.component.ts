import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'country-capitalTabla',
  templateUrl: './capital-tabla.component.html',
  styles: ``
})
export class CapitalTablaComponent {
  @Input()
  public countries: Country[] = [];
}
