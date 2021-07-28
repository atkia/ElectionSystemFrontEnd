import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-freeze-election',
  templateUrl: './freeze-election.component.html',
  styleUrls: ['./freeze-election.component.css']
})
export class FreezeElectionComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onClick(){
    localStorage.setItem('IsFreeze','freezed');
    console.log(localStorage.getItem('IsFreeze'));
    this.router.navigate(["adminPage"]);
  }
  onClick2(){
    localStorage.setItem('IsFreeze','');
    console.log(localStorage.getItem('IsFreeze'));
    this.router.navigate(["adminPage"]);
  }

}
