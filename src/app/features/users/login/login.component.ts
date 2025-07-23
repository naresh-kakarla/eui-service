import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServicesService } from 'src/app/core/user-services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private loginService: UserServicesService,private router:Router) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      const { username, password } = form.value;
      this.loginService.userLogin({ username, password }).subscribe({
        
        next: (res: any) =>{
          console.log('Login successful:', res)
          console.log('acess_token',res.data.access_token);
          console.log('refresh_token==>',res.data.refresh_token);
          
          
           localStorage.setItem('access_token', res.data.access_token);
           localStorage.setItem('refresh_token', res.data.refresh_token);
           this.router.navigate(['/home'])
        } ,
        error: (err: any) => {console.error('Login failed:', err)}
      });
    }
  }
}
