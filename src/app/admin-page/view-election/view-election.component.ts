import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CandidateInfo } from '../../model/CandidateInfo';
import { ElectionService } from '../../services/election.service';

@Component({
  selector: 'app-view-election',
  templateUrl: './view-election.component.html',
  styleUrls: ['./view-election.component.css']
})
export class ViewElectionComponent implements OnInit {
  public candidates :CandidateInfo[]=[];
  public candidates2: CandidateInfo[]=[];
  public titles:String[]=[];
  viewElection!:FormGroup;
  constructor(private fb:FormBuilder ,private service:ElectionService,private router:Router) { }

  ngOnInit(): void {
      this.loadCandidateInfo();
      
  }

  loadCandidateInfo(){
    this.viewElection= this.fb.group({
    ElectionName: ['',Validators.required]
  });
    
    this.service.getAll().subscribe(response=>{
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

  deleteInfo(candidate:CandidateInfo){
    
    this.service.deleteInfo(candidate).subscribe(
      (response: any)=>{
        if(response==true)
        {
          alert("Candidate " + candidate.name +" is deleted");
          console.log("deleted");
          //this.loadCandidateInfo() ;
          this.onSubmit();
        }
    }
    );
    console.log('Done');
  }
  updateInfo(candidate:CandidateInfo){
   
    this.service.updateInfo(candidate).subscribe(
      (response: any)=>{
        if(response==true)
        {
          console.log("updated");
          this.loadCandidateInfo() ;
          
        }
    }
    );
    console.log('Done');
  }

  onSubmit(){
    console.log(this.viewElection.get('ElectionName')?.value);
    this.service.getByTitle(this.viewElection.get('ElectionName')?.value).subscribe(response=>{
      this.candidates2=response;
    });
    console.log("Done");
  }
}
