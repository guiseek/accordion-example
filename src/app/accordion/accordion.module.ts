import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from './accordion.component';
import { AccordionItemComponent } from './accordion-item.component';
import { AccordionItemHeadingComponent } from './accordion-item-heading.component';
import { AccordionItemContentComponent } from './accordion-item-content.component';

@NgModule({
  declarations: [
    AccordionComponent,
    AccordionItemComponent,
    AccordionItemHeadingComponent,
    AccordionItemContentComponent,
  ],
  imports: [CommonModule],
  exports: [
    AccordionComponent,
    AccordionItemComponent,
    AccordionItemHeadingComponent,
    AccordionItemContentComponent,
  ],
})
export class AccordionModule {}
