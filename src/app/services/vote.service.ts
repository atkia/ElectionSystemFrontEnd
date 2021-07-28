import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class VoteService {
  eTitle:String|undefined;
  private url="http://localhost:5002/api/vote";
  constructor(private http:HttpClient,private fb:FormBuilder) {
    
    
  }

  public addVote(params:any){

    return this.http.post<any>(this.url + "/result", params);
     
   }
   public result(etitle:String){
     return this.http.get<any>(this.url +"/getResult"+'?title='+etitle);
   }
}
