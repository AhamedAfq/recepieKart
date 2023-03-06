import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


import { Recepies } from '../../recepies.model';

@Component({
  selector: 'app-recepie-item',
  templateUrl: './recepie-item.component.html',
  styleUrls: ['./recepie-item.component.css']
})
export class RecepieItemComponent implements OnInit{

  @Input() recepie: Recepies;
  @Output() recepieSelected = new EventEmitter<void>();

  constructor(){}

  ngOnInit() {
      
  }
  
  onSelected(){
    this.recepieSelected.emit();
  }
}
