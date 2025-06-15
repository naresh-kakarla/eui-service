import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  user={
    email:'',
    password:''
  }

  errorMessage='';

  constructor(
    private http:HttpClient,
    private router:Router

  ){}
  onSubmit(form:NgForm){

    this.http.post('http://localhost:3000/api/users/login',this.user).subscribe({
      next:(response)=>{
        console.log("user login successfully",response);
        this.router.navigate(['/home'])
        this.errorMessage=''
      },
      error:(err)=>{
        console.log('ivalid details');
        this.errorMessage='invalid details please try again'
        
      }
    })

  }

}
