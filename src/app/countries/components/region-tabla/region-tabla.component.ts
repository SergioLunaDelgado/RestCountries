import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'country-regionTabla',
  templateUrl: './region-tabla.component.html',
  styles: ``
})
export class RegionTablaComponent {
  @Input()
  public countries: Country[] = [];
}
