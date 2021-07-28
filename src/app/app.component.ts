import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Election-system';
  constructor(public router:Router) { }

  ngOnInit(){
    var loggedIn = localStorage.getItem('isLoggedIn');
    var voteDone= localStorage.getItem('IsVoted');
    var freeze = localStorage.getItem('IsFreeze');
    var eTitle = localStorage.getItem('IsTittle');
   
  }
}
