import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Advertisement } from '../models';
import { Filter } from '../models';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  filter: Filter = new Filter();
 getAdvertisements() {
 this.http.get<Advertisement[]>('/api/advertisements', 
 { params: new HttpParams({ fromObject: <any>this.filter }) })
 .subscribe(resp => this.advertisements = resp);
 }
  constructor(private http: HttpClient) { }
  advertisements: Advertisement[] = [];
  ngOnInit() {
  this.getAdvertisements();
  }

 }
