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
  public isLoading: boolean = true;

  constructor(private countriesService: CountriesService) {}

  searchByCapital(term:string):void {
    /* es obligatorio suscribirnos */
    this.isLoading = false;
    this.countriesService.search(term).subscribe((res:Country[])=> {
      this.countries = res;
      this.isLoading = true;
    });
  }


}
