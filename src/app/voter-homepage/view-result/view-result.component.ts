import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CandidateInfo } from 'src/app/model/CandidateInfo';
import { Vote } from 'src/app/model/Vote';
import { ElectionService } from 'src/app/services/election.service';
import { VoteService } from 'src/app/services/vote.service';

@Component({
  selector: 'app-view-result',
  templateUrl: './view-result.component.html',
  styleUrls: ['./view-result.component.css']
})
export class ViewResultComponent implements OnInit {
  public candidates :CandidateInfo[]=[];
  public candidates2: CandidateInfo[]=[];
  public titles:String[]=[];
  viewElection!:FormGroup;
  public vote=new Vote;
  constructor(private fb:FormBuilder,private service2:ElectionService, private service:VoteService,private router:Router) { }

  ngOnInit(): void {
    this.viewElection=this.fb.group({
      ElectionName:['',Validators.required]
    });
    this.service2.getAll().subscribe(response=>{
      this.candidates=response;
      console.log(this.candidates);
      this.electionTitle();
    });
   // this.showResult();
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
     /*
    console.log(this.viewElection.get('ElectionName')?.value);
    this.service2.getByTitle(this.viewElection.get('ElectionName')?.value).subscribe(response=>{
      this.candidates2=response;
    });
    */
    console.log("Done");
    this.showResult();
    this.viewElection.reset();
  }
  showResult(){
    this.service.result(this.viewElection.get('ElectionName')?.value).subscribe(
      (response:any)=>{
        this.vote=response;
        console.log(this.vote);
        console.log(response);
      }

    );
  }
}
