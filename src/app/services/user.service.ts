import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { User } from '../shared/User';
import { IUserLogin } from '../shared/Interfaces/interfaces';
import { USER_LOGIN_URL } from '../shared/constants/url';
import { ToastrService } from 'ngx-toastr';

const USER_KEY = 'User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userSubject = new BehaviorSubject<User>(this.getUserFromLocalStorage());
  public userObservable: Observable<User>;

  private unsubscribe = new Subject<void>();

  constructor(private http: HttpClient, private toastService: ToastrService) {
    this.userObservable = this.userSubject.asObservable();
  }

  login(userLogin: IUserLogin): Observable<User> {
    return this.http.post<User>(USER_LOGIN_URL, userLogin).pipe(
      tap((user) => {
        this.setUserToLocalStorage(user);
        this.toastService.success(`Welcome To Foodcorner ${user.name} |`, 'Login Successful!');
        this.userSubject.next(user); // Notify subscribers about the new user
      }),
      catchError((errorResponse) => {
        this.toastService.error(errorResponse, 'Login Failed');
        return throwError(errorResponse); // Rethrow the error for further handling
      })
    );
  }

  private setUserToLocalStorage(user: User): void {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  private getUserFromLocalStorage(): User {
    const userJson = localStorage.getItem(USER_KEY);
    return userJson ? JSON.parse(userJson) as User : new User();
  }

  // Unsubscribe from observables
  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
