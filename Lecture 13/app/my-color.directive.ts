import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[ccMyColor]'
})
export class MyColorDirective {
  arrayColor:string[]=["blue","green","red","yellow","black","gray"];;
  constructor(private el: ElementRef, private renderer: Renderer2) {
    let i = (Math.floor(Math.random()*this.arrayColor.length));
    renderer.setStyle(el.nativeElement,"color",this.arrayColor[i]);
   }

}
