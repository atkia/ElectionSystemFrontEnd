import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CandidateInfo } from '../model/CandidateInfo';

@Injectable({
  providedIn: 'root'
})
export class ElectionService {
  public candidateInfo=new CandidateInfo;
   cNumber:number=0;
   eTitle:String|undefined;
  private url="http://localhost:5002/api/candidate";
  constructor(private http:HttpClient,private fb:FormBuilder) {
   }

   public getEtitle(name:String,c:number){
    this.candidateInfo.electionName=name;
    this.cNumber=c;
   
  }
  public add(name:String,symbol:String){
    this.candidateInfo.name= name;
    this.candidateInfo.symbol=symbol;
    return this.http.post<any>(this.url + "/add", this.candidateInfo);
     
   }
  public getAll(){
     return this.http.get<any>(this.url+"/get");
  }

  public getByTitle(etitle:String){
    this.eTitle=etitle;
    
    return this.http.get<any>(this.url +"/getByEtitle"+'?title='+etitle);
  }
  
  public deleteInfo(candidate:any){
    return this.http.post<any>(this.url + "/delete" ,candidate);
  }
  public updateInfo(candidate:any){
    return this.http.post<any>(this.url + "/delete" ,candidate);
  }
}
