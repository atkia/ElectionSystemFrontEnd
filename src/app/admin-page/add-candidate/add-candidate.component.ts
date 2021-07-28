import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CandidateInfo } from 'src/app/model/CandidateInfo';
import { ElectionService } from 'src/app/services/election.service';

@Component({
  selector: 'app-add-candidate',
  templateUrl: './add-candidate.component.html',
  styleUrls: ['./add-candidate.component.css']
})
export class AddCandidateComponent implements OnInit {
  newCandidate!:FormGroup;
  constructor(private fb:FormBuilder,private service:ElectionService,public router:Router) { }
  
  ngOnInit() {
    if(localStorage.getItem('IsTittle')!='tittled'){
      this.router.navigate(['adminPage']);
    }
    this.newCandidate= this.fb.group({
      Name:['',Validators.required],
      symbol:['',Validators.required]
    });
  }
 
 public onSubmit(){
   var c= this.service.cNumber-1;
   this.service.cNumber=c;
   var name = this.newCandidate.get("Name")?.value;
   var symbol = this.newCandidate.get("symbol")?.value;
  this.service.add(name,symbol).subscribe(
    (response:any)=>{
      if(response==true){
        if(c!=0){
          this.router.navigate(["adminPage/addCandidate"]);
          alert('New Candidate added');
          console.log("Gooo....");
          this.newCandidate.reset();
        }else{
          this.router.navigate(["adminPage"]);
          alert('New Candidate added');
          console.log("Gooo....");
          this.newCandidate.reset();
        }
        
      }
      else{
        console.log("ooopppss");
        alert('Candidate already exist');
        this.router.navigate(['newElection']);
      }
    },
    (error:any)=>{
        alert('Please try again');
    }
    
    
  );

   console.log('submitted');
 
 }
}
