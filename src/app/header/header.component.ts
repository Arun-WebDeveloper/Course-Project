
import { OnInit } from "@angular/core";
import { OnDestroy } from "@angular/core";
import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { AuthService } from "../auth/auth.service";
import { DataStorageService } from "../core/services/data-storage.service";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit, OnDestroy {
    constructor(private dataStorageService: DataStorageService, private authService: AuthService, private router: Router) { }

    private userSub: Subscription
    isAuthenticated = false;

    ngOnDestroy(): void {
        this.userSub.unsubscribe();
    }
    ngOnInit(): void {
        this.userSub = this.authService.user.subscribe(user => {
            this.isAuthenticated = !user ? false : true || !!user
            console.log(!user);
            console.log(!!user);
        })
    }

    onSaveData() {
        this.dataStorageService.storeRecipes();
    }

    onFetchData() {
        this.dataStorageService.fetchRecipes().subscribe();
    }

    onLogout() {
        this.authService.loggingOut();
       

    }
}

