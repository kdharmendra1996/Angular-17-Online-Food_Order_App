import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  isSubmitted = false;
  returnUrl = '';

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private activeRouter: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
    this.returnUrl = this.activeRouter.snapshot.queryParams.returnUrl || '/';
  }

  get fc() {
    return this.loginForm.controls;
  }

  submit() {
    this.isSubmitted = true;
    if (this.loginForm.invalid) return;
  
    const emailControl = this.loginForm.get('email');
    const passwordControl = this.loginForm.get('password');
  
    if (emailControl && passwordControl) {
      this.userService.login({
        email: emailControl.value,
        password: passwordControl.value
      }).subscribe(
        () => {
          // Redirect to returnUrl or default route after successful login
          this.router.navigateByUrl(this.returnUrl);
        },
        (error) => {
          // Handle error here (e.g., display error message)
          console.error('Login failed:', error);
          // Optionally display an error message to the user
        }
      );
    }
  }
  
}
