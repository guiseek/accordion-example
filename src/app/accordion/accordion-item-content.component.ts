import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: '[app-accordion-item-content]',
  template: `<ng-content></ng-content>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [
    `
      :host {
        border-top: 1px solid rgba(var(--accordion-color, 0, 0, 0), 0.3);
        padding: 12px;
        margin: 0;
      }
      :host > ::ng-deep *:first-child {
        margin-top: 0;
      }

      :host > ::ng-deep *:last-child {
        margin-bottom: 0;
      }
    `,
  ],
})
export class AccordionItemContentComponent {}
