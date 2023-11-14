import { Component } from '@angular/core';
import { Personne } from '../Model/personne';
import {CvService} from "../cv.service";

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent {
  personnes: Personne[];
  selectedPersonne: Personne;
  constructor(private cvService: CvService) {
    this.personnes= this.cvService.getPersonnes() ;
  }
  selectPersonne(personne: Personne) {
    this.selectedPersonne = personne;
  }
  ngOnInit() {}
}
