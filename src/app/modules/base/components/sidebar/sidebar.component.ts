import { Component, OnInit } from '@angular/core';
interface navigationItemInterface {
  name: string,
  label: string
  link: string
  icon: string
}

interface navigationInterface {
  [key: string]: navigationItemInterface
}
@Component({
  selector: 'base-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  navigation: navigationInterface = {
    0: {
      name: "home",
      label: "Home",
      link: "/home",
      icon: "home"
    },
    1: {
      name: "dashboard",
      label: "Dashboard",
      link: "/dashboard",
      icon: "dashboard"
    },
    2: {
      name: "layouts",
      label: "Layouts",
      link: "/layouts",
      icon: "view_quilt"
    },
    3: {
      name: "components",
      label: "Components",
      link: "/components",
      icon: "extension"
    },
    4: {
      name: "about",
      label: "About",
      link: "/about",
      icon: "info"
    }
  };
  constructor() { }

  ngOnInit(): void {
  }

}
