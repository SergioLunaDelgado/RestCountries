import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, Subscription, debounce, debounceTime, pipe } from 'rxjs';

@Component({
  selector: 'shared-search',
  templateUrl: './search.component.html',
  styles: ``
})
export class SearchComponent implements OnInit, OnDestroy {

  /* subject tipo especial de observable */
  private debouncer: Subject<string> = new Subject<string>();
  private debouncerSuscription?:Subscription;

  @Input()
  public placeholder: string = '';

  @Output()
  public onValue = new EventEmitter<string>();

  @Output()
  public onDebounce = new EventEmitter<string>();

  // emitValue(value: string): void {
  //   this.onValue.emit(value);
  // }

  onKeyPress(search: string) {
    this.debouncer.next(search);
  }

  ngOnInit(): void {
    this.debouncerSuscription = this.debouncer
      .pipe(
        /* cuanto tiempo esperar para la siguiente misión */
        /* cuando deja de escribir valores por un segundo busca en la API */
        debounceTime(1000)
      )
      .subscribe((value: string) => {
        this.onDebounce.emit(value);
      });
  };

  /* se manda a llamar cuando se destrulle, cambio de ruta o algun condicional */
  ngOnDestroy(): void {
    this.debouncerSuscription?.unsubscribe();
  }
}