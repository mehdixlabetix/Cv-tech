import {Component, Input} from '@angular/core';
import {Personne} from "../Model/personne";
import {EmbaucheService} from "../embauche.service";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-detail-cv',
  templateUrl: './detail-cv.component.html',
  styleUrls: ['./detail-cv.component.css'],
  providers: [MessageService]
})
export class DetailCvComponent {

  @Input() personne: Personne;
  constructor(private embaucheService: EmbaucheService,private messageService: MessageService) {
  }
  showToast(){
    this.messageService.add({ severity: 'error', summary: 'Error', detail: 'this person is already selected' });  }
  embaucher() {
    if(!this.embaucheService.embaucher(this.personne)){
    this.showToast();
    }

  }
}
