import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  registerForm: FormGroup;
  submitted = false;
  errorMsg = '';

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone_number: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      is_staff: [false],
      is_superuser: [false],
    });
  }

  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    this.errorMsg = '';

    if (this.registerForm.invalid) {
      return;
    }

    const formData = this.registerForm.value;

    // TODO: send formData to backend API
    console.log('Register form data:', formData);

    alert('Registration successful!');

    // Optionally reset form or redirect user
    this.registerForm.reset();
    this.submitted = false;
  }
}
