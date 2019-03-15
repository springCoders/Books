import { Component, OnInit, Input } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Sort } from '@angular/material';

export interface BookLister {
  name: string;
  date: number;
  book_id: number;
  image: string;
}

@Component({
  selector: 'officeintegrator-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  viewMobile: Boolean = false;
  @Input() bookarray: any;
  books: BookLister[] = this.bookarray;
  sortedData: BookLister[];

  constructor(breakpointObserver: BreakpointObserver) {
    breakpointObserver
      .observe([Breakpoints.HandsetLandscape, Breakpoints.HandsetPortrait])
      .subscribe(result => {
        this.viewMobile = breakpointObserver.isMatched('(max-width:569px)');
        console.log('screen is', this.viewMobile);
      });
  }
  ngOnInit() {
    this.sortData(name);
  }

  sortData(sort: Sort) {
    const data = this.books;
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'name':
          return compare(a.name, b.name, isAsc);
        default:
          return 0;
      }
    });
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
