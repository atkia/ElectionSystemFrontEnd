import { Component, OnInit } from '@angular/core';
import{FormGroup,FormControlName, FormGroupName, FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import{AdminService} from 'src/app/services/admin.service';
@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  loginForm!:FormGroup;
  
  constructor(private fb:FormBuilder,private service:AdminService,public router:Router) { }
  
  ngOnInit() {
   this.loginForm= this.fb.group({
    userName: ['',[Validators.required]],
    password: ['',[Validators.required]]
   });
  
  }
 
  SignIn():void{
    console.log(this.loginForm.value);
    this.service.SignIn(this.loginForm.value)
      .subscribe(
        (response:any)=>{
          if(response==true){
              localStorage.setItem('isLoggedIn','admin');
              this.router.navigate(["adminPage"]);
              console.log("Gooo....");
              this.loginForm.reset();
          }
          else{
            console.log("ooopppss");
            this.router.navigate(['/']);
          }
        }
      
      );
  }


}
