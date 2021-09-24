import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-employee-registration',
  templateUrl: './employee-registration.component.html',
  styleUrls: ['./employee-registration.component.css']
})
export class EmployeeRegistrationComponent implements OnInit {
  formdata={
    "fname":'',
    "lname":'',
    "email":'',
    "mobile":'', 
    "department":'',
    "password":'',
    "confirmpassword":'',
    "address":''
  
  }

  constructor( private _router:Router) { 
    
  }

  ngOnInit(): void {

  
  }
submit(data:NgForm){ 
console.log(data.form.value)
this._router.navigate(["/login"])
}
}