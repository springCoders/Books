import { Component } from '@angular/core';

@Component({
  selector: 'officeintegrator-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'defaultappa';
  booklist = [
    {book_id: 1, name: 'anupam', image: 'assets/images/book1.jpg', date:'1' },
    {book_id: 2, name: 'bnupam', image: 'assets/images/book6.jpg' , date:'12'},
    {book_id: 3, name: 'cnupam', image: 'assets/images/book2.jpg' , date:'13'},
    {book_id: 4, name: 'jnupam', image: 'assets/images/book3.jpg', date:'121' },
    {book_id: 5, name: 'mnupam', image: 'assets/images/book1.jpg' , date:'21'},
    {book_id: 6, name: 'nnupam', image: 'assets/images/book4.jpg' , date:'31'},
    {book_id: 7, name: 'onupam', image: 'assets/images/book2.jpg' , date:'16'},
    {book_id: 8, name: 'enupam', image: 'assets/images/book5.jpg', date:'17' },
    {book_id: 9, name: 'unupam', image: 'assets/images/book3.jpg' , date:'18'},
    {book_id: 10, name: 'knupam', image: 'assets/images/book1.jpg', date:'19' },
    {book_id: 11, name: 'lnupam', image: 'assets/images/book.jpg' , date:'71'},
    {book_id: 12, name: 'ynupam', image: 'assets/images/book1.jpg', date:'81' },
    {book_id: 13, name: 'znupam', image: 'assets/images/book4.jpg' , date:'91'},
    {book_id: 14, name: 'xnupam', image: 'assets/images/book2.jpg', date:'11' },
    {book_id: 15, name: 'qnupam', image: 'assets/images/book5.jpg' , date:'111'},
    {book_id: 16, name: 'pnupam', image: 'assets/images/book3.jpg' , date:'13'},
    {book_id: 17, name: 'unupam', image: 'assets/images/book1.jpg' , date:'134'},
    {book_id: 18, name: 'vnupam', image: 'assets/images/book.jpg' , date:'167'},
    {book_id: 19, name: 'agnupam', image: 'assets/images/book1.jpg' , date:'134'},
    {book_id: 20, name: 'hnupam', image: 'assets/images/book4.jpg' , date:'12'},
  ];
  ;
}
