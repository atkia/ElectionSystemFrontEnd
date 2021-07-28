import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupName, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CandidateInfo } from 'src/app/model/CandidateInfo';
import { Vote } from 'src/app/model/Vote';
import { voteTracker } from 'src/app/model/voteTracker';
import { ElectionService } from 'src/app/services/election.service';
import { VoteService } from 'src/app/services/vote.service';
import { VotingService } from 'src/app/services/voting.service';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {
  public titles:String[]=[];
  public vote=new Vote();
 public candidates:CandidateInfo[]=[];
 public candidates2:CandidateInfo[]=[];
 voteForm!:FormGroup; 
 titleForm!:FormGroup;
 constructor(private fb:FormBuilder, private service2:ElectionService,private service:VoteService,private router:Router) { }

  ngOnInit(): void {
    if(localStorage.getItem('IsFreeze')=='freezed'){
      alert("Election is freezed....please try again later");
      this.router.navigate(['HomePage']);
    }
    else{
      this.titleForm=this.fb.group({
        ElectionName:['',Validators.required]
      });
      this.voteForm= this.fb.group({
        name: '',
        symbol:'',
        Count:[1],
        id:''
      });
      
      this.getCandidateInfo();
    }
    
  }
  addVote(){
    var id =this.voteForm.get('id')?.value;
    console.log(id);
    for(let i=0;i<this.candidates2.length;i++){
      if(this.candidates2[i].id==id){
        id=i;
      }
    }
    this.vote.electionName=this.titleForm.get('ElectionName')?.value;
    this.vote.candidateName = this.candidates2[id].name;
    this.vote.symbol=this.candidates2[id].symbol;
    this.vote.count=1;
    
    console.log(this.vote);
   
        this.service.addVote(this.vote).subscribe(
          (respose:any)=>{
            if(respose==true){
              console.log("Done");
              this.router.navigate(["HomePage"]);
            }
            else{
              console.log("noooo");
            }
          }
        );
      
  }

  getCandidateInfo(){
    this.service2.getAll().subscribe((response:any)=>{
      this.candidates=response;
      console.log(this.candidates);
      this.electionTitle();
    });

  }
  electionTitle(){
    console.log(this.titles.length);
     for(let candidate of this.candidates){ 
       if(this.titles.length==0 && candidate.electionName!=null){ 
          this.titles.push(candidate.electionName);
       }
     }
     var i=0;
     for(let candidate of this.candidates){   
         if(candidate.electionName!=null){
           if(this.titles[i]!=candidate.electionName){
             this.titles.push(candidate.electionName);
             i=i+1;         
           }
           
         }
       
     }  
 
     console.log(this.titles);
 
   }
   onSubmit(){
    if( localStorage.getItem('isEnded')==this.titleForm.get('ElectionName')?.value){
      alert("Election " + this.titleForm.get('ElectionName')?.value +" is ended");
      this.router.navigate(['HomePage/vote']);
    }
    
    else if(localStorage.getItem('isVoted')==this.titleForm.get('ElectionName')?.value){
      console.log(localStorage.getItem('isVoted'));
      alert("You have already voted in this election ");
      this.router.navigate(['HomePage/vote']);
    }
    
    else{
        console.log(this.titleForm.get('ElectionName')?.value);
        this.service2.getByTitle(this.titleForm.get('ElectionName')?.value).subscribe(response=>{
          this.candidates2=response;
        });
        localStorage.setItem('isVoted',this.titleForm.get('ElectionName')?.value);
        console.log("Done");
      }
      
    }

}
