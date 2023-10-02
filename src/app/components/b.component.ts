import { Component } from "@angular/core";
import { AComponent } from "./a.component";

@Component({
  selector: 'app-b',
  imports: [AComponent],
  standalone: true,
  template: `
    <h1>B</h1>
    <app-a />
  `,
})
export class BComponent {}
