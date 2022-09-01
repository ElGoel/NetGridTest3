import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'night-swich';


  lists: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
}
