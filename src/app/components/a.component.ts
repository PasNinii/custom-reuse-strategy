import { AsyncPipe, JsonPipe } from "@angular/common";
import { ChangeDetectionStrategy, Component } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Component({
  selector: 'app-a',
  standalone: true,
  imports: [AsyncPipe,JsonPipe],
  template: `
    <h1>A</h1>

    {{ data$ | async | json }}
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AComponent {
  data$ = new BehaviorSubject<{ id: number; data: string; }[]>([]);
  loaded = false;

  ngOnInit() {
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
