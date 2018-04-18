import { Directive, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[ccMyVisibility]'
})
export class MyvisibilityDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {
    renderer.setStyle(el.nativeElement,"visibility",el.nativeElement.attributes.ccMyVisibility.nodeValue);
   }

}
