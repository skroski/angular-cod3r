import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRed]'
})
export class RedDirective {

  constructor(private el: ElementRef) { 

    el.nativeElement.style.color = 'hsl(0, 35%, 53%)'
    
  }

}
