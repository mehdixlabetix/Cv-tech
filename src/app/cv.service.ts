import { Injectable } from '@angular/core';
import {Personne} from "./Model/personne";

@Injectable({
  providedIn: 'root'
})
export class CvService {
  private personnes: Personne[] ;
  constructor() {
    this.personnes = [
      new Personne(1, 'mehdi', 'cherif', 22, 'student', 'mehdi1.jpg', 123456),
      new Personne(2, 'mehdi', 'ekher', 22, 'student', 'mehdi2.jpg', 10000001),
      new Personne(2, 'mehdi', 'thelth', 223, 'student', '', 104001),
    ];
  }
  getPersonnes(): Personne[] {
    return this.personnes;

  }
}
