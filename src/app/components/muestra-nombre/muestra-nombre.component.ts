import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-muestra-nombre',
  templateUrl: './muestra-nombre.component.html',
  styles: [
  ]
})
export class MuestraNombreComponent implements OnInit,OnChanges {
  @Input()nombre!:string
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("cambioo")
  }

  ngOnInit(): void {
  }


}
