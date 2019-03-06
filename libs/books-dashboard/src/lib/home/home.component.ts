import { Component, OnInit } from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

@Component({
  selector: 'officeintegrator-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
viewMobile: Boolean = false; 

  constructor(breakpointObserver: BreakpointObserver) {
    breakpointObserver.observe([
      Breakpoints.HandsetLandscape,
      Breakpoints.HandsetPortrait
    ]).subscribe(result => {
      this.viewMobile = breakpointObserver.isMatched('(max-width: 768px)');
        console.log('screen is', this.viewMobile);
    });
  }
  ngOnInit() {  

  }

}
