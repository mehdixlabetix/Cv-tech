import {Component, EventEmitter, Input, Output} from '@angular/core';
import { Personne } from '../Model/personne';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent {
  @Input() personne: Personne;
  @Output() selectedPersonne = new EventEmitter();
  selectPersonne() {
   this.selectedPersonne.emit(this.personne);
  }
}
