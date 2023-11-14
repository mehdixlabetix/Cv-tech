import {Component, EventEmitter, Input, Output} from '@angular/core';
import { Personne } from '../Model/personne';

@Component({
  selector: 'app-liste-cv',
  templateUrl: './liste-cv.component.html',
  styleUrls: ['./liste-cv.component.css'],
})
export class ListeCVComponent {
  @Input() personnes: Personne[];
  @Output() selectedPersonne = new EventEmitter();
  selectPersonne(selectedPersonne: Personne){
    this.selectedPersonne.emit(selectedPersonne);
  }
}
