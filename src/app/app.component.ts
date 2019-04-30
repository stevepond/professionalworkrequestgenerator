import { Component } from '@angular/core';
import {data} from './data.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private readonly data = data as Array<{test: string}>;
  readonly text = this.data[Math.floor(Math.random() * (this.data.length - 1))].test;
}
