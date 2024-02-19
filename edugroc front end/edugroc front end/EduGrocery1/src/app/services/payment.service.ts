import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Payuser } from '../payuser';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  
  baseUrl="http://localhost:8080/payment";

  constructor(private httpClient:HttpClient) { }


  // connection
  registerUser(puser:Payuser): Observable<Object>{
    console.log(puser);
    return this.httpClient.post(`${this.baseUrl}`,puser);

  }
}
