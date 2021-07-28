import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {ElectionService} from 'src/app/services/election.service';
//import {NewElectionComponent} from 'src/app/admin-page/new-election/new-election.component';
import { CandidateInfo } from '../model/CandidateInfo';
@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.css']
})
export class CandidateComponent implements OnInit {

 // candidateForm!:FormGroup;
  candidate:CandidateInfo[]= [];
  constructor(private fb:FormBuilder,private service:ElectionService,public router:Router) { }
  
  ngOnInit() {
    /*
   this.candidateForm= this.fb.group({
    Etitle:[this.c.titleName],
    name:['',Validators.required],
    symbol:['',Validators.required]
   });
  */
  }
 
 public onSubmit(){
   console.log('submitted');

 }

}
