import { Component, OnInit } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-theme-switcher',
  templateUrl: './theme.switcher.component.html',
  styleUrls: ['theme-switch-component.scss']
})
export class ThemeSwitcherComponent implements OnInit {

  checked: boolean = false;

  mode: string = '';

  changed(event: MatSlideToggleChange): void {
    this.checked = !this.checked;
    this.mode = event.checked ? 'nightlight_round' : 'light_mode';
    document.body.classList.toggle('darkMode');
  }

  constructor() { }

  ngOnInit(): void {
  }

}
