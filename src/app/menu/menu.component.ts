import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass'],
})
export class MenuComponent {
  @Output()
  linkClicked: EventEmitter<any> = new EventEmitter();

  linkClick() {
    this.linkClicked.emit();
  }

  changeTheme() {
    document.querySelector('body')?.classList.toggle('dark-theme');
  }

  getThemeChangeText() {
    let isDarkModeActive = document
      .querySelector('body')
      ?.classList.contains('dark-theme');
    return isDarkModeActive ? 'light-mode' : 'dark-mode';
  }
}
