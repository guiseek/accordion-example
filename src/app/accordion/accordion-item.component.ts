import {
  Input,
  Output,
  Component,
  ElementRef,
  EventEmitter,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'details[app-accordion-item]',
  template: `
    <summary (click)="onClick()">
      <ng-content select="[app-accordion-item-heading]"></ng-content>
    </summary>
    <ng-content select="section"></ng-content>
  `,
  styleUrls: ['./accordion-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class AccordionItemComponent<Ref = unknown> {
  @Output()
  opened = new EventEmitter<Ref>();

  @Output()
  closed = new EventEmitter<Ref>();

  @Input()
  ref?: Ref;

  get el() {
    return this._elRef.nativeElement;
  }

  constructor(private _elRef: ElementRef<HTMLDetailsElement>) {}

  onClick() {
    if (this.el.open) {
      this.closed.emit(this.ref);
    } else {
      this.opened.emit(this.ref);
    }
  }
}
