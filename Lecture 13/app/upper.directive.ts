import { Directive, ElementRef,Renderer2 } from '@angular/core';

@Directive({
  selector: '[ccUpper]'
})
export class UpperDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {
    renderer.setStyle(el.nativeElement,"textTransform","uppercase");
   }

}
