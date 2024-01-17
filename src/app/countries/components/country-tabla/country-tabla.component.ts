import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'country-countryTabla',
  templateUrl: './country-tabla.component.html',
  styles: ``
})
export class CountryTablaComponent {
  
  @Input()
  public countries: Country[] = [];
}
