import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

 
 
export class PostService {

  constructor(private http: HttpClient) { }
 getPosts() : Observable<any>{
    return this.http.get('https://jsonplaceholder.typicode.com/posts/',{observe: 'response'});
  }

}
 