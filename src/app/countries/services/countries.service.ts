import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, delay, of, tap } from 'rxjs';
import { Country } from '../interfaces/country';
import { CacheStore } from '../interfaces/cache-store';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private apiUrl: string = 'https://restcountries.com/v3.1';

  public cacheStore: CacheStore = {
    byCapital: { term: '', countries: [] },
    byCountries: { term: '', countries: [] },
    byRegion: { region: '', countries: [] },
  }

  constructor(private http: HttpClient) {
    this.loadFromLocalStorage();
  }

  private saveToLocalStorage() {
    localStorage.setItem('cacheStore', JSON.stringify(this.cacheStore));
  }

  private loadFromLocalStorage() {
    if (!localStorage.getItem('cacheStore')) return;
    this.cacheStore = JSON.parse(localStorage.getItem('cacheStore')!);
  }

  /* input -> hijo output -> hijo emit -> padre html -> padre ts */
  search(term: string, route: string = 'capital'): Observable<Country[]> {
    const url = `${this.apiUrl}/${route}/${term}`;
    return this.http.get<Country[]>(url)
      .pipe(
        /* creo un observable temporal para regresar una arreglo vacio */
        tap(() => this.saveToLocalStorage()),
        catchError(() => of([])),
        delay(2000)
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
