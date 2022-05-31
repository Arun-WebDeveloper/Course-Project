import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private authService: AuthService,
    private toast:NgToastService ) {

  }
  ngOnInit() {
    this.authService.autoLogin();
  }

  //showSuccess(){
    //this.toast.success({detail:'TOP RIGHT',summary:'Top Right',position:'tr'})
  //}

}
