import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass'],
})
export class MenuComponent {
  @Output()
  linkClicked: EventEmitter<any> = new EventEmitter();

  constructor(
    private cartService: CartService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    let theme = localStorage.getItem('theme')!;
    if (!theme) {
      localStorage.setItem('theme', 'light');
      this.theme = false;
    } else {
      switch (theme) {
        case 'light':
          this.theme = false;
          break;
        case 'dark':
          this.theme = true;
          document.querySelector('body')?.classList.toggle('dark-theme');
      }
    }
  }

  theme: boolean = false;

  linkClick() {
    this.linkClicked.emit();
  }

  redirectToCart() {
    this.router.navigate(['cart']);
  }

  changeTheme() {
    document.querySelector('body')?.classList.toggle('dark-theme');
    localStorage.setItem('theme', this.theme === false ? 'dark' : 'light');
    this.theme = !this.theme;
  }

  getThemeChangeText() {
    let isDarkModeActive = document
      .querySelector('body')
      ?.classList.contains('dark-theme');
    return isDarkModeActive ? 'light-mode' : 'dark-mode';
  }
  getNOfItemsInCart() {
    return this.cartService.getNOfItemsInCart();
  }
}
