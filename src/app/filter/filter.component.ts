import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Filter } from '../models';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit{
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  @Input()
  filter: Filter = new Filter;
  @Output() submit: EventEmitter<void> = new EventEmitter<void>();
}
