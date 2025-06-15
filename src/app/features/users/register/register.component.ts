import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

   user = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    address: {
      street: '',
      city: '',
      state: '',
      postalCode: '',
      country: ''
    }
  };

  constructor(
    private http: HttpClient,
    private router:Router
  ) {}

  onSubmit(form: any) {
    if (form.valid) {
      this.http.post('http://localhost:3000/api/users/register', this.user).subscribe({
        next: (res) => {
          console.log('User registered successfully:', res);
          this.router.navigate(['/login'])
          
        },
        error: (err) => {
          console.error('Registration failed:', err);
        }
      });
    }
  }
}
