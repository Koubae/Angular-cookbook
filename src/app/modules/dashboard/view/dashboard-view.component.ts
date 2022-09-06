import {Component, OnInit} from '@angular/core';


interface componentItemInterface {
  key: string
  title: string
  link: string
  icon: string
}

interface componentInterface {
  [key: string]: componentItemInterface
}


@Component({
  selector: 'view-dashboard',
  templateUrl: './dashboard-view.component.html',
  styleUrls: ['./dashboard-view.component.css']
})
export class ViewDashboardComponent implements OnInit {
  bannerTitle = "Dashboard";

  components: componentInterface = { //
    0: {
      key: 'nav-bar',
      title: 'Nav Bars',
      link: 'nav-bars',
      icon: 'lan'
    },
    1: {
      key: 'buttons',
      title: 'Buttons',
      link: 'buttons',
      icon: 'smart_button'
    },
    2: {
      key: 'layouts',
      title: 'Layouts',
      link: 'layouts',
      icon: 'grid_4x4'
    },
    3: {
      key: 'headers',
      title: 'Headers',
      link: 'headers',
      icon: 'settings_system_daydream'
    },
    4: {
      key: 'forms',
      title: 'Forms',
      link: 'forms',
      icon: 'edit_calendar'
      }
  }

  constructor() {
  }

  ngOnInit(): void {
  }
}
