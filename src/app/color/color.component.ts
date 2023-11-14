import { Component } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent {
  color = 'black';
  size = 26 + 'px';
  font = 'arial';

  changeSize(input: any) {
    this.size = input.value + 'px';

  }

}

