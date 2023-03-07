import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'ecommerce';

  constructor(private matSnackBar: MatSnackBar) {
    let _cookies = localStorage.getItem('cookies')!;
    if (!_cookies) {
      let snackBarRef = this.matSnackBar.open(
        'We use cookies to ensure you have the best browsing experience on our website. By using our site, you acknowledge that you have read and understood our Cookie Policy & Privacy Policy',
        'Got it!',
        {
          verticalPosition: 'bottom',
        }
      );
      snackBarRef
        .onAction()
        .subscribe(() => localStorage.setItem('cookies', JSON.stringify(true)));
    }
  }
}
