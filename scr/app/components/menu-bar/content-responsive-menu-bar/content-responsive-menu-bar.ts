import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuBarComponent } from '../menu-bar.component';

@Component({
  selector: 'app-content-responsive-menu-bar',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './content-responsive-menu-bar.component.html',
  styleUrl: './content-responsive-menu-bar.component.css'
})
export class ContentResponsiveMenuBarComponent {
  constructor(private menuBarComponent: MenuBarComponent){};

  closeMenuBarResponsive() {
    return this.menuBarComponent.closeMenuBarResponsive()
  };

}
