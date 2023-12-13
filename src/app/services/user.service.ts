import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../shared/User';
import { HttpClient } from '@angular/common/http';
import { IUserLogin } from '../shared/Interfaces/interfaces';
import { USER_LOGIN_URL } from '../shared/constants/url';
import { ToastrService } from 'ngx-toastr';
import { tap } from 'rxjs/operators'; // Import 'tap' operator

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userSubject = new BehaviorSubject<User>(new User());
  public userObservable: Observable<User>; // Corrected the variable name

  constructor(private http: HttpClient, private toastService: ToastrService) {
    this.userObservable = this.userSubject.asObservable();
  }

  login(userLogin: IUserLogin):Observable<User> {
    return this.http.post<User>(USER_LOGIN_URL, userLogin).pipe(
      tap((user) => {
        this.toastService.success(`Welcome To Foodcorner ${user.name} |`, 'Login Successful!');
        this.userSubject.next(user); // Emit the logged-in user to subscribers
      }),
      // Handling error response
      // Here you can customize the error handling as per your application's requirement
      tap({
        error: (errorResponse) => {
          this.toastService.error(errorResponse, 'Login Failed');
        }
      })
    );
  }
}
