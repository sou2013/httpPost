import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonTestService {
  url:string;
  httpClient: HttpClient
  constructor(httpClient:HttpClient) { 
    this.httpClient = httpClient;
    this.url = "http://localhost:3000/";
  }
}
