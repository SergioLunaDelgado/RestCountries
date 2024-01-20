import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';
import { Region } from '../../interfaces/region';

@Component({
  selector: 'country-region',
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent {
  public countries: Country[] = [];
  public isLoading: boolean = true;
  public regions: Region[] = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];
  public selectedRegion?: Region;

  constructor(private countriesService: CountriesService) { }

  searchByRegion(term: Region): void {
    this.isLoading = false;
    this.countriesService.search(term, 'region').subscribe((res: Country[]) => {
      this.countries = res;
      this.isLoading = true;
      this.selectedRegion = term;
    });
  }
}
