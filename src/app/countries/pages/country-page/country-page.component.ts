import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';
import { switchMap } from 'rxjs';

@Component({
  selector: 'country-page',
  templateUrl: './country-page.component.html',
  styles: ``
})
export class CountryPageComponent implements OnInit{
  public countries: Country[] = [];
  // public countries?:any;

  constructor(
    private activatedRoute: ActivatedRoute, 
    private countriesService: CountriesService,
    private router: Router
  ) {}

  /* A diferencia de los otros componentes aqui mi inicio esta en la URL y no en un input */
  /* subscribe = pipe */
  /* no puede colcoar el null asi que el if lo tomo si esta vacio el arreglo
  ademas para la vista lo pase como si fuera un arreglo con más lineas para ciclarlos con un for */
  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(switchMap(({id}) => this.countriesService.search(id, 'alpha')))
      .subscribe(country => {
        /* recordando que se esta pasando un parametro por url por lo cual tenemos que cuidar */
        if(!country[0]) {
          return this.router.navigateByUrl('/countries/by-capital');
        }
        console.log(country);
        console.log(country[0]);
        return this.countries = country;
      });
    }
  }

  // ngOnInit(): void {
  //   this.activatedRoute.params.subscribe((params) => {
  //     this.searchCountry(params['id']);
  //   })
  // }

  // searchCountry(code:string) {
  //   this.countriesService.search(code, 'alpha').subscribe((res:Country[]) => {
  //     this.countries = res;
  //     console.log(res);
  //   })
  // }
