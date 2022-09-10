import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { AccordionModule } from './accordion/accordion.module';

function hexToRgb(value: string) {
  const [r, g, b] = value.slice(1).match(/.{1,2}/g) ?? [];
  return [parseInt(r, 16), parseInt(g, 16), parseInt(b, 16)];
}

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [CommonModule, AccordionModule],
  templateUrl: './app.component.html',
})
export class AppComponent {
  items = [1, 2, 3, 4];
  eventLogs: string[] = [];

  log(value: string) {
    this.eventLogs.push(value);
  }

  changeIconMarkers() {
    document.body.classList.toggle('icon-marker-changed');
  }
  changeBorderColor(value: string) {
    document.body.style.setProperty(
      `--accordion-color`,
      hexToRgb(value).join(',')
    );
  }
}
