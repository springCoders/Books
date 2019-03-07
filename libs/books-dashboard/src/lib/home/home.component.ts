import { Component, OnInit, Input } from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

@Component({
  selector: 'officeintegrator-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
viewMobile: Boolean = false; 
@Input() bookarray:string

  constructor(breakpointObserver: BreakpointObserver) {
    breakpointObserver.observe([
      Breakpoints.HandsetLandscape,
      Breakpoints.HandsetPortrait
    ]).subscribe(result => {
      this.viewMobile = breakpointObserver.isMatched('(max-width:569px)');
        console.log('screen is', this.viewMobile);
    });
  }
  ngOnInit() {  

  }

}
