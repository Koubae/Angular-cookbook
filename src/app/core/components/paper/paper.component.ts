import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'core-paper',
  templateUrl: './paper.component.html',
  styleUrls: ['./paper.component.css']
})
export class PaperComponent implements OnInit {

  @Input() elevation: number = 0;
  paperInflation : string = "core-paper-inflated-1";

  @ViewChild('paperContent', { read: ElementRef, static: true}) paperContent: ElementRef | undefined;

  constructor() { }

  ngOnInit(): void {
    if (this.elevation < 0) {
      this.elevation = 0;
    } else if (this.elevation > 24) {
      this.elevation = 24;
    }

    // Because the bigger the shadow the bigger the host html tag should be in order to contain the shadow else
    // it is very ugly without a proper shadow fade
    this.paperInflation = "core-paper-inflated-" + (this.elevation <= 10 ? 1 : this.elevation <= 16 ? 2 : 3);

  }

}
