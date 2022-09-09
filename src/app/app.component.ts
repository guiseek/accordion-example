import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { AccordionModule } from './accordion/accordion.module';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [CommonModule, AccordionModule],
  templateUrl: './app.component.html',
})
export class AppComponent {
  eventLogs: string[] = [];

  log(value: string) {
    this.eventLogs.push(value);
  }
}
