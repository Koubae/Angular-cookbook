import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'view-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export  class ViewHomeComponent implements OnInit {

  bannerTitle = "Angular Cook-Book!";

  constructor() {}

  ngOnInit(): void {}


}
