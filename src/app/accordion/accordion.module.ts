import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from './accordion.component';
import { AccordionItemComponent } from './accordion-item.component';
import { AccordionItemHeadingComponent } from './accordion-item-heading.component';

@NgModule({
  declarations: [
    AccordionComponent,
    AccordionItemComponent,
    AccordionItemHeadingComponent,
  ],
  imports: [CommonModule],
  exports: [
    AccordionComponent,
    AccordionItemComponent,
    AccordionItemHeadingComponent,
  ],
})
export class AccordionModule {}
