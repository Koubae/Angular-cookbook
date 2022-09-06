import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'view-dashboard',
  templateUrl: './dashboard-view.component.html',
  styleUrls: ['./dashboard-view.component.css']
})
export class ViewDashboardComponent implements OnInit {
  bannerTitle = "Dashboard";

  constructor() {}

  ngOnInit(): void {}
}
