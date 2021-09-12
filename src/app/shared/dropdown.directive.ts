import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;
  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.isOpen = this.elRef.nativeElement.contains(event.target)
      ? !this.isOpen
      : false;
  }
  constructor(private elRef: ElementRef) {}
}


// To do the dropdown change which will remain open until clicked twice
// import { Directive, HostBinding, HostListener, OnInit } from '@angular/core';

// @Directive({
//   selector: '[appDropdown]',
// })
// export class DropdownDirective implements OnInit {
//   @HostBinding('class.open') isOpen = false;

//   @HostListener('click') toggleOpen() {
//     this.isOpen = !this.isOpen;
//   }
//   constructor() {}
//   ngOnInit() {}
// }
