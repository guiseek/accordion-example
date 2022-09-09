import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: '[app-accordion-item-heading]',
  template: `<ng-content></ng-content>`,
  styles: [
    `
      :host {
        padding: 8px 8px 0 8px;
        font-size: 100%;
        padding: 8px;

        align-items: center;
        display: inline-flex;
        cursor: pointer;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccordionItemHeadingComponent {}
