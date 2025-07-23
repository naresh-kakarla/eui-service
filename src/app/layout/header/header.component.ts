import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  isLoggedIn = false;      // TODO: replace with real auth status
  cartItemCount = 3;       // TODO: replace with real cart service data
  mobileMenuOpen = false;

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeMobileMenu() {
    this.mobileMenuOpen = false;
  }

  logout() {
    // TODO: add logout logic here (call auth service, clear tokens, etc)
    this.isLoggedIn = false;
    this.closeMobileMenu();
    alert('Logged out!');
  }
}
