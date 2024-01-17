import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'country-region',
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent {
  public countries: Country[] = [];

  constructor(private countriesService: CountriesService) { }

  searchByRegion(term: string): void {
    this.countriesService.search(term, 'region').subscribe((res: Country[]) => {
      this.countries = res;
    });
  }
}
