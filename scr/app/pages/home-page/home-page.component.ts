import { Component } from '@angular/core';
import { BigCardComponent } from '../../components/big-card/big-card.component';
import { SmallCardComponent } from '../../components/small-card/small-card.component';
import { MenuTitleComponent } from '../../components/menu-title/menu-title.component';
import { MenuBarComponent } from '../../components/menu-bar/menu-bar.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [ BigCardComponent, SmallCardComponent, MenuTitleComponent, MenuBarComponent ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})

export class HomePageComponent {

  constructor(){ }

}
