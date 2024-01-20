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
  public isLoading = true;
  
  constructor(private countriesService: CountriesService) { }
  
  searchByCountry(term: string): void {
    this.isLoading = false;
    this.countriesService.search(term, 'name').subscribe((res: Country[]) => {
      this.countries = res;
      this.isLoading = true;
    });
  }
}
