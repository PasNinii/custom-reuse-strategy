import { AsyncPipe, JsonPipe } from "@angular/common";
import { AfterViewInit, Component } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Component({
  selector: 'app-a',
  standalone: true,
  imports: [AsyncPipe,JsonPipe],
  template: `
    <h1>C</h1>

    {{ data$ | async | json }}
  `,
})
export class CComponent implements AfterViewInit {
  data$ = new BehaviorSubject<{ id: number; data: string; }[]>([]);
  loaded = false;

  ngAfterViewInit() {
    console.log('AComponent ngOnInit');

    setTimeout(() => {
      console.log('AComponent setTimeout');
      if (!this.loaded) {
        this.data$.next([
          { id: 1, data: 'A' },
          { id: 2, data: 'B' },
        ]);

        this.loaded = true;
      }
    }, 2000);
  }
}
