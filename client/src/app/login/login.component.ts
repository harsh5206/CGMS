import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email!:string;
  password!:string;
  type!:string;
  reg_name!:string;
  reg_gender!:string;
  reg_year!:string;
  reg_department!:string;
  reg_batch!:string;
  reg_rollno!:string;
  reg_email!:string;
  reg_idphoto!:string;
  reg_contact!:string;
  reg_password!:string;
  reg_confirm_password!:string;


  
  constructor() { }

  ngOnInit(): void {
  }

}
