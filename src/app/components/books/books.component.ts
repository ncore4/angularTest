import { Component, OnInit, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/services/books/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  srv = inject(BooksService);

  constructor() { }

  data: Book[] = [];

  page: number = 1;
  contentSize: number = 15;

  ngOnInit(): void {
    this.loadData();
  }

  data$: Observable<Book[]> | null = null;

  loadData() {
    this.data$ = this.srv.getBooks(this.contentSize, this.page);
  }

  nextPage() {
    this.page++;
    this.loadData();
  }

  previousPage() {
    if (this.page > 1) {
      this.page--;
      this.loadData();
    }
  }

}
