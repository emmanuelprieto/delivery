import { Component, OnInit, Inject } from '@angular/core';
import { Barrio } from '../../models/barrio/barrio.class';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  barrioSelected: Barrio;
  barrios: Barrio[];
}

@Component({
  selector: 'app-barrio',
  templateUrl: './barrio.component.html',
  styleUrls: ['./barrio.component.css']
})
export class BarrioComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<BarrioComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
  }

  ngOnInit() {
  }

  /* getBarrios() {
    let barrio: Barrio = new Barrio();
    barrio.nombre = 'Centro';
    this.barrios.push(barrio);
    barrio = new Barrio();
    barrio.nombre = 'Alto Gorriti';
    this.barrios.push(barrio);
    barrio = new Barrio();
    barrio.nombre = 'Bajo Gorriti';
    this.barrios.push(barrio);
    barrio = new Barrio();
    barrio.nombre = 'Ciudad de Nieva';
    this.barrios.push(barrio);
    barrio = new Barrio();
    barrio.nombre = '25 de Mayo';
    this.barrios.push(barrio);
    barrio = new Barrio();
    barrio.nombre = '23 de Agosto';
    this.barrios.push(barrio);
    barrio = new Barrio();
    barrio.nombre = 'Villa San Martin';
    this.barrios.push(barrio);
    barrio = new Barrio();
    barrio.nombre = 'Villa Belgrano';
    this.barrios.push(barrio);
    barrio = new Barrio();
    barrio.nombre = 'Los Naranjos';
    this.barrios.push(barrio);
    barrio = new Barrio();
    barrio.nombre = 'El Chingo';
    this.barrios.push(barrio);
    barrio = new Barrio();
    barrio.nombre = 'Alto Padilla';
    this.barrios.push(barrio);
    barrio = new Barrio();
    barrio.nombre = 'Huaico';
    this.barrios.push(barrio);
    barrio = new Barrio();
    barrio.nombre = 'Los Molinos';
    this.barrios.push(barrio);
    barrio = new Barrio();
    barrio.nombre = 'Reyes';
    this.barrios.push(barrio);
    barrio = new Barrio();
    barrio.nombre = 'Sargento Cabral - Alto Comedero';
    this.barrios.push(barrio);
    barrio = new Barrio();
    barrio.nombre = 'Exodo Jujeño - Alto Comedero';
    this.barrios.push(barrio);
  } */

}
