import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-voter-homepage',
  templateUrl: './voter-homepage.component.html',
  styleUrls: ['./voter-homepage.component.css']
})
export class VoterHomepageComponent implements OnInit {
 // voteDone= true;
 voteDone:boolean=true;
  constructor(public router:Router) { }

  ngOnInit(): void {
    if(localStorage.getItem("isLoggedIn")!="voter"){
      this.router.navigate(["login"]);
    }
    console.log(localStorage.getItem('isLoggedIn'));
    
  }

}
