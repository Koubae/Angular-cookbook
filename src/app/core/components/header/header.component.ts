import { Component, OnInit, Input,  ViewChild, TemplateRef, ElementRef } from '@angular/core';

@Component({
  selector: 'core-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() title: string|undefined = "";
  @Input() titleSub: string|undefined = "";
  @Input() height: number = 15;
  @Input() withBorder: boolean = false;
  @Input() elevated: boolean = false;
  @Input() titleSubLink: string|undefined;

  headerHasContent: boolean = false;

  @ViewChild('headerContent', { read: ElementRef, static: true}) headerContent : ElementRef | undefined;

  constructor() { }

  ngOnInit(): void {
    // NOTE: By checking if the header has some ng-content inseted we can dynamically add
    // remove specific class or attributes to the component
    this.headerHasContent = !!(this.headerContent?.nativeElement.innerHTML);
  }

}
