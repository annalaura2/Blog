import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HomePageComponent, MenuBarComponent ]
})
export class AppComponent {
  title = 'blog';
}
