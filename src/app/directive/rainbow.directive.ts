import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appRainbow]'
})
export class RainbowDirective {
  colors = ['red', 'blue', 'green', 'yellow', 'black', 'pink', 'orange', 'purple', 'brown', 'grey'];
  @HostBinding('style.color')color: string;
  @HostBinding('style.borderColor')bc: string;
  constructor() { }
  @HostListener('keypress')changeColor(){
    const index = Math.floor(Math.random() * (this.colors.length - 1));
    this.color = this.colors[index];
    this.bc = this.colors[index];
  }

}
