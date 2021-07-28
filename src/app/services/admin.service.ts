import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { FormBuilder,Validators } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class AdminService {


 private url="http://localhost:5002/api/admin";
  constructor(private http:HttpClient,private fb:FormBuilder) {
   }

  public SignIn(params:any){

    return this.http.post<any>(this.url + "/SignIn", params);
     
   }
   loginForm= this.fb.group({
    
      userName:['' ,[Validators.required]],
      password: ['', [Validators.required]],
    
   });

}
