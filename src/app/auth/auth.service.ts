import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { ToastrModule, ToastrService } from "ngx-toastr";
import { BehaviorSubject } from "rxjs";
import { Subject, tap, throwError } from "rxjs";
import { catchError } from "rxjs";
import { AuthResponseData } from "./authResponseData";
import { User } from "./user.model";

@Injectable({ providedIn: 'root' })
export class AuthService {

    constructor(
        private http: HttpClient, 
        private router: Router,
        private toastr:ToastrService) { }

    user = new BehaviorSubject<User>(null);
    private tokenExpirationTimer: any;

    signUp(email: string, password: string) {
        return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAZ4gBDeMIsnPfD_nQ5T6KBZ3zirYKmwh0',
            {
                email: email,
                password: password,
                returnSecureToken: true
            }

        ).pipe(catchError(this.handleError), tap(resData => {
            this.handleAuthentication(resData.email, resData.localId, resData.idToken, +resData.expiresIn)
        })
        );
    }

    logIn(email: string, password: string) {
        return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAZ4gBDeMIsnPfD_nQ5T6KBZ3zirYKmwh0',
            {
                email: email,
                password: password,
                returnSecureToken: true
            }

        ).pipe(catchError(this.handleError), tap(resData => {
            this.handleAuthentication(resData.email, resData.idToken, resData.localId, +resData.expiresIn)
        }));
    }
    autoLogin() {
        const userData: {
            email: string;
            id: string;
            _token: string;
            _tokenExpirationDate: string;
        } = JSON.parse(localStorage.getItem('userData'));
        if (!userData) {
            return;
        }
        const loadedUser = new User(userData.email, userData.id, userData._token, new Date(userData._tokenExpirationDate));

        if (loadedUser.token) {
            this.user.next(loadedUser)
            const expirationDuration = new Date(userData._tokenExpirationDate).getTime() - new Date().getTime();
            this.autoLogout(expirationDuration);
        }
    }
    //logging out to set the user to null
    loggingOut() {
        this.user.next(null);
        this.router.navigate(['/auth'], { queryParams: { loggingOut: 'successFully' }, fragment: 'loadingToAuthPage' })
        this.toastr.info('Logged out !','Successfull')
        localStorage.removeItem('userData');
    }

    autoLogout(expirationDuration: number) {
        //confirm('message'+ expirationDuration)
        //console.log(expirationDuration);
        this.tokenExpirationTimer = setTimeout(() => {
            this.loggingOut();
        }, expirationDuration)
    }

    // creating a new user to login
    private handleAuthentication(email: string, token: string, userId: string, expiresIn: number) {
        {
            const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
            const user = new User(email, userId, token, expirationDate);
            this.user.next(user);
            this.autoLogout(expiresIn * 1000);
            localStorage.setItem('userData', JSON.stringify(user))
        }
    }


    private handleError(errorRes: HttpErrorResponse) {
        let errorMessage = "An error Occurred !"
        if (!errorRes.error || !errorRes.error.error) {
            return throwError(errorMessage);
        }
        switch (errorRes.error.error.message) {
            case "EMAIL_EXISTS": errorMessage = "This Email Exists already !"
                break;
            case "EMAIL_NOT_FOUND": errorMessage = "This Email is Not found please SignIn !"
                break;
            case "INVALID_PASSWORD": errorMessage = "Password is Invalid Please try again !"
                break;
        }
        return throwError(errorMessage);
    }
}