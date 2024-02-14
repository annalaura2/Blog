import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-small-card',
  standalone: true,
  imports: [],
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css'
})
export class SmallCardComponent {
  @Input() photoUrl: string = "";
  @Input() date: string = "";
  @Input() title: string = "";
  @Input() id: string = "";

  constructor( private route: Router ){}

  newsNavigation(idNews: string) {
    this.route.navigate([`content/${idNews}`])
  }
}
