import { Component } from '@angular/core';
import { ContentResponsiveMenuBarComponent } from './content-responsive-menu-bar/content-responsive-menu-bar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu-bar',
  standalone: true,
  imports: [ ContentResponsiveMenuBarComponent, CommonModule ],
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.css'
})
export class MenuBarComponent {

  isLifeMenuBarResponsive: boolean = true;

  constructor(){};

  menuBarResponsive(): void{
    if (this.isLifeMenuBarResponsive === true){
      this.isLifeMenuBarResponsive = false;
    };
  };

  closeMenuBarResponsive(): void {
    this.isLifeMenuBarResponsive = true;
  };
}
