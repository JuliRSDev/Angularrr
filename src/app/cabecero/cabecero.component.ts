import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabecero',
  templateUrl: './cabecero.component.html',
  styleUrls: ['./cabecero.component.css']
})
export class CabeceroComponent implements OnInit {

  @Input() ingresoTotal: number;
  @Input() egresoTotal: number;
  @Input() presupuestoTotal: number;
  @Input() porcentajeTotal: number;

  constructor() { }

  ngOnInit(): void {
  }

}
