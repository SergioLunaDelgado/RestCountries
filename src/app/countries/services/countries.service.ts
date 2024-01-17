import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private apiUrl:string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) { }

  /* input -> hijo output -> hijo emit -> padre html -> padre ts */
  search(term:string, route:string = 'capital'): Observable<Country[]> {
    const url = `${this.apiUrl}/${route}/${term}`;
    return this.http.get<Country[]>(url) 
    .pipe(
      /* creo un observable temporal para regresar una arreglo vacio */
      catchError(() => of([]))
    );
  }

  // search(term:string, route:string = 'capital'): Observable<Country[] |null> {
  //   const url = `${this.apiUrl}/${route}/${term}`;
  //   return this.http.get<Country[]>(url) 
  //   .pipe(
  //     map((countries: string | any[]) => countries.length > 0 ? countries[0] : null),
  //     /* creo un observable temporal para regresar una arreglo vacio */
  //     catchError(() => of(null))
  //   );
  // }
}
