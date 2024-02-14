import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContentComponent } from './pages/content/content.component';

export const routes: Routes = [
    {
        path: '',
        component: HomePageComponent,
    },
    {
        path:'content/:id',
        component: ContentComponent,
    }
];
