import { Component, OnInit } from '@angular/core';
import { RecDetails } from './mock-rec-detail';

@Component({
  selector: 'app-rec-detail-card',
  templateUrl: './rec-detail-card.component.html',
  styleUrls: ['./rec-detail-card.component.css']
})
export class RecDetailCardComponent implements OnInit {

  recdetails = RecDetails;

  constructor() { }

  ngOnInit() {
  }

}
