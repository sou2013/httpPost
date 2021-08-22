import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Person } from './person';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JSONRPCClient } from "json-rpc-2.0";

@Injectable({providedIn:'root'})
export class ApiService {
 
  baseURL: string = "http://localhost:3000/";
 
  constructor(private http: HttpClient) {
  }
 
  getPeople(): Observable<Person[]> {
    console.log('getPeople '+this.baseURL + 'people')
    return this.http.get<Person[]>(this.baseURL + 'people')
  }
 
getPeople2() {
  const client = new JSONRPCClient((jsonRPCRequest) =>
  fetch("http://localhost:3000/people", {
    method: "GET",
    headers: {
      "content-type": "application/json", "header2":"222"
    },
    body: JSON.stringify(jsonRPCRequest),
  }).then((response) => {
    if (response.status === 200) {
      // Use client.receive when you received a JSON-RPC response.
      return response
        .json()
        .then((jsonRPCResponse) => client.receive(jsonRPCResponse));
    } else if (jsonRPCRequest.id !== undefined) {
      return Promise.reject(new Error(response.statusText));
    }
  })
);
}

  addPerson(person:Person): Observable<any> {
    const headers = { 'content-type': 'application/json', 'header1':'111'}  
    const body=JSON.stringify(person);
    console.log(body)
    return this.http.post(this.baseURL + 'people', body,{'headers':headers})
  }
 
}