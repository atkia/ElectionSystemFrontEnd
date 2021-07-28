import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CandidateInfo } from 'src/app/model/CandidateInfo';
import { Vote } from 'src/app/model/Vote';
import { ElectionService } from 'src/app/services/election.service';
import { VoteService } from 'src/app/services/vote.service';

@Component({
  selector: 'app-admin-view-result',
  templateUrl: './admin-view-result.component.html',
  styleUrls: ['./admin-view-result.component.css']
})
export class AdminViewResultComponent implements OnInit {

  public vote=new Vote;
  public candidates :CandidateInfo[]=[];
  public candidates2: CandidateInfo[]=[];
  public titles:String[]=[];
  viewResult!:FormGroup;
  constructor(private fb:FormBuilder ,private service:VoteService, private service2:ElectionService,private router:Router) { }

  ngOnInit(): void {
    this.loadCandidateInfo();

      this.viewResult=this.fb.group({
        ElectionName:['',Validators.required]
      });
   
  }

  loadCandidateInfo(){
    this.viewResult= this.fb.group({
    ElectionName: ['',Validators.required]
  });
    
    this.service2.getAll().subscribe(response=>{
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


  showResult(){
    this.service.result(this.viewResult.get('ElectionName')?.value).subscribe(
      (response:any)=>{
        this.vote=response;
        console.log(this.vote);
        console.log(response);
      }

    );
  }

  onSubmit(){
    console.log(this.viewResult.get('ElectionName')?.value);
    this.service2.getByTitle(this.viewResult.get('ElectionName')?.value).subscribe(response=>{
      this.candidates2=response;
    });
    console.log("Done");
    this.showResult();
  }
}
