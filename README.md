# OutPut ()
0. Exportar hijo en el modulo
1. PadreComponent TS | metodo base | recibe un elemento
2. PadreComponent HTML | evento creado en el padre (onLOREM)="LOREM($event)"
3. HijoComponent HTML | crear referencia local #LOREM
4. HijoComponent HTML | evento (keyup.enter)="emitLOREM('referencia_local'.value)"
5. HijoComponent TS | @Output() public onLOREM = new EventEmitter<LOREM>()
6. HijoComponent TS | recibir evento emitLOREM(LOREM:LOREM)

# Input []
0. Exportar hijo en el modulo
1. HijoComponent HTML | crear argumento dinamico [LOREM]="LOREM"
2. HijoComponent TS | @Input() public LOREM:LOREM = '';
3. PadreComponent | [LOREM]="LOREM"