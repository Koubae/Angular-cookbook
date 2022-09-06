import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'base-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  dateToday: Date = new Date();
  lastWebSiteUpdate: string = "15/06/2022";

  constructor() { }

  ngOnInit(): void {
  }

}
