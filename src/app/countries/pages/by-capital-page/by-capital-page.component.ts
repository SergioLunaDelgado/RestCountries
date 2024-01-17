import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'country-capital',
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent {

  public countries:Country[] = []; 

  constructor(private countriesService: CountriesService) {}

  searchByCapital(term:string):void {
    /* es obligatorio suscribirnos */
    this.countriesService.search(term).subscribe((res:Country[])=> {
      this.countries = res;
    });
  }
}
