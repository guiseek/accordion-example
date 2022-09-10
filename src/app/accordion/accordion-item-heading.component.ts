import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: '[app-accordion-item-heading]',
  template: `<ng-content></ng-content>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [
    `
      :host {
        padding: 6px 6px 0 6px;
        font-size: 100%;
        padding: 6px;
        margin: 6px;
        align-items: center;
        display: inline-flex;
        cursor: pointer;
      }
    `,
  ],
})
export class AccordionItemHeadingComponent {}
