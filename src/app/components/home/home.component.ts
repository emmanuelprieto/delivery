import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { BarrioComponent } from '../barrio/barrio.component';
import { Barrio } from '../../models/barrio/barrio.class';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  barrioSelected: Barrio;
  barrios: Barrio[] = [];
  lat = -24.2057;
  lng = -65.2702851;

  constructor(public dialog: MatDialog) {
      this.getBarrios();
      const dialogRef = this.dialog.open(BarrioComponent, {
        width: '1900px',
        data: {barrios: this.barrios, barrioSelected: this.barrioSelected},
        disableClose: true
      });

      dialogRef.afterClosed().subscribe(result => {
        this.barrioSelected = result;
        console.log('The dialog was closed' + this.barrioSelected.nombre);
      });
  }

  ngOnInit() {
  }

  getBarrios() {
    let barrio: Barrio = new Barrio();
    barrio.id = 1;
    barrio.nombre = 'Centro';
    barrio.lat = -24.1860592;
    barrio.lng = -65.3055403;
    barrio.zoom = 15.97;
    this.barrios.push(barrio);
    barrio = new Barrio();
    barrio.id = 2;
    barrio.nombre = 'Alto Gorriti';
    barrio.lat = -24.1979436;
    barrio.lng = -65.295764;
    barrio.zoom = 16.51;
    this.barrios.push(barrio);
    barrio = new Barrio();
    barrio.id = 3;
    barrio.nombre = 'Bajo Gorriti';
    this.barrios.push(barrio);
    barrio = new Barrio();
    barrio.id = 4;
    barrio.nombre = 'Ciudad de Nieva';
    this.barrios.push(barrio);
    barrio = new Barrio();
    barrio.id = 5;
    barrio.nombre = '25 de Mayo';
    this.barrios.push(barrio);
    barrio = new Barrio();
    barrio.id = 6;
    barrio.nombre = '23 de Agosto';
    this.barrios.push(barrio);
    barrio = new Barrio();
    barrio.id = 7;
    barrio.nombre = 'Villa San Martin';
    this.barrios.push(barrio);
    barrio = new Barrio();
    barrio.id = 8;
    barrio.nombre = 'Villa Belgrano';
    this.barrios.push(barrio);
    barrio = new Barrio();
    barrio.id = 9;
    barrio.nombre = 'Los Naranjos';
    this.barrios.push(barrio);
    barrio = new Barrio();
    barrio.id = 10;
    barrio.nombre = 'El Chingo';
    this.barrios.push(barrio);
    barrio = new Barrio();
    barrio.id = 11;
    barrio.nombre = 'Alto Padilla';
    this.barrios.push(barrio);
    barrio = new Barrio();
    barrio.id = 12;
    barrio.nombre = 'Huaico';
    this.barrios.push(barrio);
    barrio = new Barrio();
    barrio.id = 13;
    barrio.nombre = 'Los Molinos';
    this.barrios.push(barrio);
    barrio = new Barrio();
    barrio.id = 14;
    barrio.nombre = 'Reyes';
    this.barrios.push(barrio);
    barrio = new Barrio();
    barrio.id = 15;
    barrio.nombre = 'Sargento Cabral - Alto Comedero';
    this.barrios.push(barrio);
    barrio = new Barrio();
    barrio.id = 16;
    barrio.nombre = 'Exodo Jujeño - Alto Comedero';
    this.barrios.push(barrio);
  }
}
