import { Component, OnInit } from '@angular/core';
import { FormsModule, FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import {LoginDetails} from '../login/LoginDetials';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hero: any;
  heroForm: FormGroup;

  constructor(private router: Router) { }

  username: string;
  password: string;


  ngOnInit(): void {


  }
  login(form: NgForm){
    console.log(form.value.username);
    console.log(form.value.password);
    if (form.value.username === 'admin' && form.value.password === 'admin') {
      this.router.navigate(['/admin/dashboard']);
    }
    //router.navigate([{outlets: {primary: 'admin' , sidebar: 'path'}}]);
  }
}
