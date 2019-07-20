import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatRadioModule } from '@angular/material/radio';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatDialogModule,
    MatRadioModule
  ],
  exports: [
    MatDialogModule,
    MatRadioModule
  ],
})
export class MaterialModule { }
