import { OnInit } from "@angular/core";
import { ComponentFactoryResolver } from "@angular/core";
import { OnDestroy } from "@angular/core";
import { ViewChild } from "@angular/core";
import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { Subscription } from "rxjs";
import { Subject } from "rxjs";
import { Observable } from "rxjs";
import { AlertComponent } from "../alert/alert.component";
import { PlaceholderDirective } from "../export files/placeholder.directive";
import { AuthService } from "./auth.service";
import { AuthResponseData } from "./authResponseData";


@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnDestroy {
    isLoginMode = true;
    error: string = null;
    isLoading = false;
    @ViewChild(PlaceholderDirective) alertHost = PlaceholderDirective;
    private closeSub: Subscription

    constructor(
        private authService: AuthService,
        private router: Router,
        private toastr: ToastrService,
        private componentFactoryResolver: ComponentFactoryResolver) { }
    ngOnDestroy(): void {
        if(this.closeSub){
            this.closeSub.unsubscribe();
        }
    }

    onSwitchMode() {
        this.isLoginMode = !this.isLoginMode;
    }

    onSubmit(form: NgForm) {

        if (!form.valid) { // checks if a form is valid or not 
            return;
        }

        //Creating constant value for email and password 
        const email = form.value.email;
        const password = form.value.password;
        this.isLoading = !this.isLoading || true;
        // Observable allows you to prevent it from repeating the code again and again.
        let authObs: Observable<AuthResponseData>;

        //In login mode we are signingIn with email,password using login created in service.
        if (this.isLoginMode) {
            authObs = this.authService.logIn(email, password);

        } else {
            //it is for signUp creating email and password
            authObs = this.authService.signUp(email, password)
        }

        //handling errors we used as an observable so we dont repeat the code.
        authObs.subscribe(resData => {
            console.log(resData);
            this.isLoading = false;
            this.router.navigate(['/recipes'], { queryParams: { loggedInSelect: 'recipes' }, fragment: 'loadingSpicyRecipes' })
            this.toastr.success('Logged In!', 'Successfully!')
        }, errorMessage => {
            console.log(errorMessage);
            this.error = errorMessage;
            this.showAlertError(errorMessage)
            this.isLoading = false;
        })

        form.reset();
    }
    onHandleError() {
        this.error = null;
    }
    private showAlertError(message: string) {
        const alertCmp = this.componentFactoryResolver.resolveComponentFactory(AlertComponent);
        const hostContainerRef = this.alertHost.viewContainerRef;
        hostContainerRef.clear();
        const componentRef = hostContainerRef.createComponent(alertCmp);
        componentRef.instance.message = message;
        this.closeSub = componentRef.instance.close.subscribe(() => {
            this.closeSub.unsubscribe();
            hostContainerRef.clear();
        })
    }
}