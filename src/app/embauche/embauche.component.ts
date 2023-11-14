import { Component } from '@angular/core';
import {Personne} from "../Model/personne";
import {EmbaucheService} from "../embauche.service";

@Component({
  selector: 'app-embauche',
  templateUrl: './embauche.component.html',
  styleUrls: ['./embauche.component.css']
})
export class EmbaucheComponent {
  personnes: Personne[];
  constructor(private embaucheService: EmbaucheService) {
    this.personnes= this.embaucheService.getEmbauchees() ;
  }

}
