import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recepies } from '../recepies.model';

@Component({
  selector: 'app-recepies-list',
  templateUrl: './recepies-list.component.html',
  styleUrls: ['./recepies-list.component.css']
})
export class RecepiesListComponent implements OnInit{
  
  @Output() recepieWasSelected = new EventEmitter<Recepies>();
  recepies: Recepies[] = [
    new Recepies('A Test recepie','desc test','https://upload.wikimedia.org/wikipedia/commons/5/57/990402-ians-recipe-01-IMG_4724.jpg'),
    new Recepies('A Test recepie','desc test','https://upload.wikimedia.org/wikipedia/commons/5/57/990402-ians-recipe-01-IMG_4724.jpg')
  ];
  constructor(){

  }
  ngOnInit(){
      
  }
  onRecepieSelected(recepie: Recepies){
    this.recepieWasSelected.emit(recepie);
  }
}

