import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { UserServicesService } from 'src/app/core/user-services.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private registerUser:UserServicesService
  ) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      first_name:['',Validators.required],
      last_name:['',Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone_number: ['', Validators.required]
    });
  }

  get formControl(){
    return this.registerForm.controls;
  }

  onSubmit() {
    if (this.registerForm.valid) {
      this.registerUser.register(this.registerForm.value).subscribe({
        next: res => {
          console.log('Registration successful', res);
        },
        error: err => {
          console.error('Registration failed', err);
        }
      });
    }
  }
}
