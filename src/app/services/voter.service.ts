import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { FormBuilder,Validators } from '@angular/forms';
import { Observable,BehaviorSubject } from 'rxjs';
import { voter } from '../model/voter';
@Injectable({
  providedIn: 'root'
})
export class VoterService {
  private voterSubject: BehaviorSubject<voter> | any;
  public voter: Observable<voter> | any ;
  private url="http://localhost:5002/api/voter";
  constructor(private http:HttpClient,private fb:FormBuilder) {
    
    this.voterSubject = new BehaviorSubject<voter>(JSON.parse(localStorage.getItem('user') || '{}'));
    this.voter = this.voterSubject.asObservable();
  }

  public SignIn(params:any){

    return this.http.post<any>(this.url + "/SignIn", params);
     
   }

  public SignUp(params:any){
      return this.http.post<any>(this.url + "/SignUp",params);
  }
   

 
}
