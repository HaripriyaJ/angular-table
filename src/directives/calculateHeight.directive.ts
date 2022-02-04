import {
  AfterContentInit,
  Directive,
  ElementRef,
  EventEmitter,
  Output,
} from '@angular/core';

@Directive({
  selector: '[calcHeight]',
})
export class HeightDirective implements AfterContentInit {
  @Output() calculatedHeight: EventEmitter<number> = new EventEmitter<any>();
  constructor(public elRef: ElementRef) {}

  ngAfterContentInit(): void {
    this.calculatedHeight.emit(
      this.elRef.nativeElement.getBoundingClientRect().height
    );
  }
}
