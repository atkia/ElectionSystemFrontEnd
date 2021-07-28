import { Component, OnInit } from '@angular/core';
import{FormGroup,FormControlName, FormGroupName, FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import{VoterService} from 'src/app/services/voter.service';
import { voteTracker } from '../model/voteTracker';
import { VotingService } from '../services/voting.service';
@Component({
  selector: 'app-voter-login',
  templateUrl: './voter-login.component.html',
  styleUrls: ['./voter-login.component.css']
})
export class VoterLoginComponent implements OnInit {
  Vform!:FormGroup;
  constructor(private fb:FormBuilder,private service:VoterService, public router:Router) { }
  
  ngOnInit() {
  
    this.Vform= this.fb.group({

    NID: ['',[Validators.required]]
   });
  
  }
 
  SignIn():void{
    console.log(this.Vform.value);
    this.service.SignIn(this.Vform.value)
      .subscribe(
        (response:any)=>{
          if(response==true){
              localStorage.setItem("isLoggedIn","voter");
              this.router.navigate(["HomePage"]);
              console.log("Gooo....");
              this.Vform.reset();
          }
          
          else if (response==false){
            console.log("ooopppss");
            alert("Your NID is not register.Register... ");
            this.Vform.reset();
          
            this.router.navigate(['login']);

          }
          else{
            alert("Please try again");
          }
        }
      
      );
  }

}
