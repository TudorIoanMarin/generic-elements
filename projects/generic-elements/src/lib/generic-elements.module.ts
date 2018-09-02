import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericTableComponent } from './generic-table/generic-table.component';
import { MatTableModule } from '@angular/material';
import { GenericElementsService } from './generic-elements.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    MatTableModule,
    CommonModule,
    HttpClientModule
  ],
  declarations: [GenericTableComponent],
  providers: [GenericElementsService],
  exports: [GenericTableComponent]
})
export class GenericElementsModule { }
