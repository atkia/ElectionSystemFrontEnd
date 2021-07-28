import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { PreloadAllModules, Router } from '@angular/router';
import {ElectionService} from 'src/app/services/election.service';

@Component({
  selector: 'app-new-election',
  templateUrl: './new-election.component.html',
  styleUrls: ['./new-election.component.css']
})
export class NewElectionComponent implements OnInit {
  newElection!:FormGroup;
  constructor(private fb:FormBuilder,public router:Router,private service:ElectionService) { }

 ngOnInit(){
  this.newElection= this.fb.group({
    ElectionName: ['',Validators.required],
    CNumber:Number
  });
 }
 onSubmit(){
   localStorage.setItem('IsTittle','tittled');
  // console.log(this.newElection.value);
   this.service.getEtitle(this.newElection.get("ElectionName")?.value,this.newElection.get("CNumber")?.value);
   
   this.router.navigate(["adminPage/addCandidate"]);
 }

}
