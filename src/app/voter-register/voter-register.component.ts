import { Component, OnInit } from '@angular/core';
import{FormGroup,FormControlName, FormGroupName, FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import{VoterService} from 'src/app/services/voter.service';
@Component({
  selector: 'app-voter-register',
  templateUrl: './voter-register.component.html',
  styleUrls: ['./voter-register.component.css']
})
export class VoterRegisterComponent implements OnInit {

  form!:FormGroup;
  
  constructor(private fb:FormBuilder,private service:VoterService,public router:Router) { }
  
  ngOnInit() {
  
    this.form= this.fb.group({
    Firstname:['',Validators.required],
    Lastname:['',Validators.required],
    Address:['',Validators.required],
    NID: ['',[Validators.required]]
   });
  
  }
 
  SignUp():void{
    console.log(this.form.value);
    this.service.SignUp(this.form.value)
      .subscribe(
        (response:any)=>{
          if(response==true){
              localStorage.setItem('isLoggedIn','user');
              this.router.navigate(["HomePage"]);
              console.log("Gooo....");
              this.form.reset();
          }
          
          else if (response==false){
            console.log("ooopppss");
            alert("You'r already registered... ");
            this.form.reset();
          
            this.router.navigate(['voter']);

          }
          else{
            alert("Please try again");
          }
        }
      
      );
  }

  
}
