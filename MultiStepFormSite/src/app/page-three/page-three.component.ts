import { Component, Input } from '@angular/core';

@Component({
  selector: 'msfs-page-three',
  templateUrl: './page-three.component.html',
  styleUrls: ['./page-three.component.css']
})
export class PageThreeComponent {
  @Input() pageThree! : Element | null;

}
