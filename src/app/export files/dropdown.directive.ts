import { HostListener } from "@angular/core";
import { ElementRef } from "@angular/core";
import { HostBinding } from "@angular/core";
import { Directive } from "@angular/core";
import { OnInit } from "@angular/core";

@Directive({
    selector: '[appDropdownDirective]'
})
export class DropdownDirective implements OnInit {
    @HostBinding('class.open')
    isOpen = false;
    @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
        this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
    }
    constructor(private elRef: ElementRef) {

    }
    ngOnInit() {

    }
}