import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthoService } from 'src/app/authentication/autho.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
formdata:FormGroup;
errormessage='';
  constructor(private _router:Router, private _authoService:AuthoService) { 
    this.formdata=new FormGroup({
      "userid": new FormControl('',Validators.required),
      "password": new FormControl('',Validators.required)
    })
  }

  ngOnInit(): void {
  }

submit(){
  console.log(this.formdata.value)
  let user= this.formdata.value;
  if(user.userid=="test@gmail.com" && user.password=="1235"){
    this. _authoService.Authentication();
 this._router.navigate(["/admin"])
  }
  else{
    this.errormessage="invalid login"
  }
}

}
