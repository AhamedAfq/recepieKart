import { Component, OnInit } from '@angular/core';
import { Recepies } from './recepies.model';

@Component({
  selector: 'app-recepies',
  templateUrl: './recepies.component.html',
  styleUrls: ['./recepies.component.css']
})
export class RecepiesComponent implements OnInit {

  selectedRecepie: Recepies

  constructor(){

  }

  ngOnInit() {
      
  }

}
