import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { GenericElementsService } from './../generic-elements.service';

@Component({
  selector: 'generic-table',
  templateUrl: './generic-table.component.html',
  styleUrls: ['./generic-table.component.css']
})
export class GenericTableComponent implements OnInit, OnChanges {
  @Input('serviceApiPath') serviceApiPath: string;
  @Input('tableColumns') tableColumns: string[];
  @Input('inputData') inputData: any[];

  public entitySource = new MatTableDataSource();

  constructor(private genericTableService: GenericElementsService) { }

  public cammelCaseToTitleCase(text: string) {
    const split = text.replace( /([A-Z])/g, ' $1' );
    return split.charAt(0).toUpperCase() + split.slice(1);
  }

  ngOnInit(): void {
    if (this.serviceApiPath) {
      this.genericTableService.getEntitiesByPath(this.serviceApiPath)
        .subscribe(entities => this.entitySource = new MatTableDataSource(entities));
    } else if (this.inputData) {
      this.entitySource = new MatTableDataSource(this.inputData);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.inputData && !changes.inputData.firstChange) {
      this.entitySource = new MatTableDataSource(changes.inputData.currentValue);
    }
  }
}
