import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-big-card',
  standalone: true,
  imports: [],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css',
})
export class BigCardComponent {
  @Input() photoUrl: string = "";
  @Input() date: string = "";
  @Input() title: string = "";
  @Input() newsContent: string = "";
  @Input() id: string = "";

  constructor( private route: Router ){}

  newsNavigation(idNews: string) {
    this.route.navigate([`content/${idNews}`])
  }
}
