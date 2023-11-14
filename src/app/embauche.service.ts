import { Injectable } from '@angular/core';
import {Personne} from "./Model/personne";
@Injectable({
  providedIn: 'root'
})
export class EmbaucheService {
private personnes :Personne[];

  constructor() {

    this.personnes = [];
  }
  getEmbauchees():Personne[]{
    return this.personnes;
  }
  embaucher(personne:Personne):boolean{
    const index=this.personnes.indexOf(personne);
    if(index===-1){
      this.personnes.push(personne);
      return true;
    }else{

    return false;
    }}
  débaucher(personne:Personne):boolean{
    const index=this.personnes.indexOf(personne);
    if(index===-1){
return false;
    }else{
      this.personnes.splice(index,1);
    return true;
    }
  }
}
