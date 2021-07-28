import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-voter-module',
  templateUrl: './voter-module.component.html',
  styleUrls: ['./voter-module.component.css']
})
export class VoterModuleComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
  }

}
