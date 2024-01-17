import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'country-country',
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent {
  public countries: Country[] = [];

  constructor(private countriesService: CountriesService) { }

  searchByCountry(term: string): void {
    this.countriesService.search(term, 'name').subscribe((res: Country[]) => {
      console.log(res);
      this.countries = res;
    });
  }
}
