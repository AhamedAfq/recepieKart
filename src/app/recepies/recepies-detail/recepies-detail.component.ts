import { Component, Input } from '@angular/core';
import { Recepies } from '../recepies.model';

@Component({
  selector: 'app-recepies-detail',
  templateUrl: './recepies-detail.component.html',
  styleUrls: ['./recepies-detail.component.css']
})
export class RecepiesDetailComponent {
  @Input() recepie: Recepies
}
