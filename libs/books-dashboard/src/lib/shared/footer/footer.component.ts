import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'officeintegrator-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  text:String= "";
  constructor() { }

  ngOnInit() {
  }

}
