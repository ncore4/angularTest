import { Component, OnInit, inject } from '@angular/core';
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

  loadData() {
    this.srv.getBooks(this.contentSize, this.page).subscribe(
      {
        next: books => {
          this.data = books;
        },
        complete: () => {
          //data loaded message
        }
      }
    );
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
