import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private loginService: LoginService,private router:Router) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      const { email, password } = form.value;
      this.loginService.userLogin({ email, password }).subscribe({
        next: (res: any) => console.log('Login successful:', res),
        error: (err: any) => console.error('Login failed:', err)
      });
    }
  }
}
