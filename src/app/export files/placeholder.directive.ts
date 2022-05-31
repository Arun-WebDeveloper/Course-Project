import { ViewContainerRef } from '@angular/core';
import { Directive } from '@angular/core';

@Directive({
  selector: '[appPlaceholder]'
})
export class PlaceholderDirective {
  static viewContainerRef: any;

  constructor(public viewContainerRef: ViewContainerRef) { }

}
