import { Component, Input } from '@angular/core';

@Component({
  selector: 'msfs-page-four',
  templateUrl: './page-four.component.html',
  styleUrls: ['./page-four.component.css']
})
export class PageFourComponent {
  @Input() pageFour! : Element | null;

}
