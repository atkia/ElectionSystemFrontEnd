import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { voter } from '../model/voter';
import { voteTracker } from '../model/voteTracker';

@Injectable({
  providedIn: 'root'
})
export class VotingService {
  public voted= new voteTracker;
  private url="http://localhost:5002/api/vote";
  constructor(private http:HttpClient) { }
  
  public getNID(nid:number){
    this.voted.NID = nid;
  }
  public add(eName:string){
   
      this.voted.ELectionName=eName;
      this.voted.voted=true;
    return this.http.post<any>(this.url + "/votedTracker", this.voted);
  }

}
