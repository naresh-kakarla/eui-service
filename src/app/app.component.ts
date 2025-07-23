import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'eui-service';

showCategory=true
  
  constructor(private router: Router) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event) => {
         
        const hiddenOnRoutes = ['/users/login', '/users/register'];
         const isProductPage = this.router.url.startsWith('/products/');
        this.showCategory = !hiddenOnRoutes.includes(this.router.url) && !isProductPage;
      });
  }
}
