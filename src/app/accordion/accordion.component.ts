import {
  Input,
  OnDestroy,
  QueryList,
  Component,
  ContentChildren,
  AfterContentInit,
  ChangeDetectionStrategy,
} from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { AccordionItemComponent } from './accordion-item.component';

@Component({
  selector: '[app-accordion]',
  template: ` <ng-content select="details[app-accordion-item]"></ng-content> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [
    `
      :host {
        display: flex;
        flex-direction: column;
        border: 1px solid rgba(0, 0, 0, 0.3);
        background-color: transparent;
        border-radius: 4px;
      }
    `,
  ],
})
export class AccordionComponent implements AfterContentInit, OnDestroy {
  private _subject = new Subject<void>();

  @ContentChildren(AccordionItemComponent)
  items!: QueryList<AccordionItemComponent>;

  @Input()
  allOpened = false;

  ngAfterContentInit() {
    this.items.forEach((item) => {
      if (!this.allOpened) {
        item.opened
          .pipe(takeUntil(this._subject))
          .subscribe(() => this.closeAll());
      }

      if (!item.el.open) {
        item.el.open = this.allOpened;
      }
    });
  }

  closeAll() {
    this.items.forEach((item) => {
      if (item.el.open) {
        item.el.open = false;
        item.closed.emit(item.ref);
      }
    });
  }

  ngOnDestroy(): void {
    this._subject.next();
    this._subject.complete();
  }
}
