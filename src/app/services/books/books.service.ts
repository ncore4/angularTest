import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from 'src/app/models/book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  srv = inject(HttpClient);
  url:string = "https://jsonplaceholder.typicode.com/posts";

  public getBooks (limit:number=15,page:number = 1):Observable<Book[]>{
    return this.srv.get<Book[]>(`${this.url }?_limit=${limit}&_page=${page}`);
  }
}
