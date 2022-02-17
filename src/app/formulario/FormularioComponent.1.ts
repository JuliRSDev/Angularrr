import { Component, OnInit } from '@angular/core';
import { Egreso } from '../egreso/egreso.model';
import { EgresoServicio } from '../egreso/egreso.servicio';
import { Ingreso } from '../ingreso/ingreso.model';
import { IngresoServicio } from '../ingreso/ingreso.servicio';



@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  tipo: string = "ingresoOperacion";
  descripcionInput: string;
  valorInput: number;

  constructor(private ingresoServicios: IngresoServicio,
    private egresoServicios: EgresoServicio) { }

  ngOnInit(): void {
  }

  tipoOperacion(evento) {
    this.tipo = evento.target.value;
  }

  agregarValor(): void {

    if (this.tipo === 'ingresoOperacion') {
      this.ingresoServicios.ingresos.push(new Ingreso(this.descripcionInput, this.valorInput));
    } else if (this.tipo === 'egresoOperacion') {
      this.egresoServicios.egresos.push(new Egreso(this.descripcionInput, this.valorInput));
    }

  }

}
